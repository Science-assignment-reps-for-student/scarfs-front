import React, { FC, useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './style';
import { Modal } from '../../Modal';
import { reset } from '../../../../../modules/reducer/Modal';
import { stateChange, isAbleFileExt, useToken } from '../../../../../lib/function';
import { ReducerType } from '../../../../../modules/store';
import { FileResponse } from '../../../../../lib/api/FileSubmit';
import { ErrorType } from '../../../../../lib/type';
import { sendRefreshToken } from '../../../../../modules/reducer/Header';

interface SubmitFileNameError {
  status: number;
  conflict_files: string[];
}

interface Props {
  getSubmittedFiles: (type: string, assignmentId: number) => void;
  submittedFiles: FileResponse[];
  getSubmittedFilesError: ErrorType;
  submitFile: (type: string, assignmentId: number, data: FormData) => void;
  submitFileSuccess: boolean;
  submitFileError: ErrorType;
  isSubmitLoading: boolean;
  deleteSubmittedFileSuccess: boolean;
  deleteSubmittedFileError: ErrorType;
  deleteSubmittedFile: (type: string, assignmentId: number) => void;
  resetFileSubmit: () => void;
}

const FileSubmitModal: FC<Props> = ({
  getSubmittedFiles,
  submittedFiles,
  getSubmittedFilesError,
  submitFile,
  submitFileSuccess,
  submitFileError,
  isSubmitLoading,
  deleteSubmittedFileSuccess,
  deleteSubmittedFileError,
  deleteSubmittedFile,
  resetFileSubmit,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const location = useLocation();
  const assignmentId = parseInt(location.pathname.split('/')[3]);
  const { type } = useSelector(
    (state: ReducerType) => state.AssignmentDetailPost.assignmentDetailPost,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isOvered, setIsOvered] = useState(false);
  const closeModal = stateChange(reset);

  const isFileNameExist = useCallback(
    (file: File) => {
      return files.findIndex(f => f.name.normalize('NFC') === file.name.normalize('NFC')) !== -1
        ? true
        : false ||
          submittedFiles.findIndex(
            f => f.file_name.normalize('NFC') === file.name.normalize('NFC'),
          ) !== -1
        ? true
        : false;
    },
    [files, submittedFiles],
  );
  const cancelButtonClickHandler = () => {
    closeModal();
  };

  const addFileHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOvered(true);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isOvered) {
      setIsOvered(true);
    }
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOvered(false);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOvered(false);

    if (e.dataTransfer.files) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === 'file') {
          const file: File = e.dataTransfer.items[i].getAsFile();
          if (isAbleFileExt(file.name)) {
            if (isFileNameExist(file)) {
              alert('동일한 파일 이름은 추가할수 없습니다.');
            } else {
              setFiles(prev => [...prev, file]);
            }
          } else {
            alert(`${file.name}: 가능하지 않은 확장자입니다.`);
          }
        }
      }
    } else {
      alert('정상 처리되지 않았습니다. "+" 버튼을 클릭 후 기능을 이용해 주세요');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    setFiles(prev => {
      const newFiles = [...prev];
      for (let i = 0; i < files.length; i++) {
        if (isFileNameExist(files.item(i))) {
          alert('동일한 파일 이름은 추가할수 없습니다.');
        } else {
          newFiles.push(files.item(i));
        }
      }
      return newFiles;
    });
  };

  const onClickDelete = useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const { fileId } = e.currentTarget.dataset;
      if (confirm('첨부파일을 정말로 삭제하시겠습니까?')) {
        deleteSubmittedFile(type, Number(fileId));
      }
    },
    [files],
  );

  const onClickSubmit = () => {
    if (!files.length) {
      alert('파일은 최소 1개 이상이어야 합니다.');
    } else {
      const data = new FormData();
      files.forEach(file => {
        data.append('file[]', file);
      });
      submitFile(type, assignmentId, data);
    }
  };

  const onClickDeleteLocalFile = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { index } = e.currentTarget.dataset;
    const newFiles = [...files];
    newFiles.splice(Number(index), 1);

    setFiles(newFiles);
  };

  useEffect(() => {
    getSubmittedFiles(type, assignmentId);

    return () => {
      resetFileSubmit();
    };
  }, []);

  useEffect(() => {
    if (getSubmittedFilesError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getSubmittedFiles(type, assignmentId),
        page: 'FileSubmitModal/getSubmittedFiles',
      };
      refreshTokenChange(params);
    } else if (getSubmittedFilesError.status) {
      alert(`Error code: ${getSubmittedFilesError.status} 제출한 파일 불러오기 실패!`);
    }
  }, [getSubmittedFilesError]);

  useEffect(() => {
    if (submitFileSuccess) {
      cancelButtonClickHandler();
    }
  }, [submitFileSuccess]);

  useEffect(() => {
    if (submitFileError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => onClickSubmit(),
        page: 'FileSubmitModal/submitFile',
      };
      refreshTokenChange(params);
    } else if (submitFileError.status === 409) {
      ((submitFileError as any) as SubmitFileNameError).conflict_files.forEach(name =>
        alert(`동일한 파일이름이 존재합니다.('${name}')`),
      );
    } else if (submitFileError.status) {
      alert(`Error code: ${submitFileError.status} 파일 제출 실패!`);
    }
  }, [submitFileError]);

  useEffect(() => {
    if (deleteSubmittedFileSuccess) {
      resetFileSubmit();
      getSubmittedFiles(type, assignmentId);
    }
  }, [deleteSubmittedFileSuccess]);

  useEffect(() => {
    if (deleteSubmittedFileError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => onClickDelete,
        page: 'FileSubmitModal/deleteSubmittedFile',
      };
      refreshTokenChange(params);
    } else if (deleteSubmittedFileError.status) {
      alert(`Error code: ${deleteSubmittedFileError.status} 제출한 파일 삭제 실패!`);
    }
  }, [deleteSubmittedFileError]);

  return (
    <Modal>
      <S.FileSubmitModalBox>
        <S.FileDragBox
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          backgroundColor={isOvered ? 'gray' : '#ffffff'}
        >
          <S.FilePlusButton onClick={addFileHandler} />
          <S.ExplainText>클릭 또는 이곳으로 파일을 드래그하세요.</S.ExplainText>
        </S.FileDragBox>
        {!!submittedFiles.length && (
          <>
            <S.Label>제출한 파일</S.Label>
            <S.FileListBox>
              {submittedFiles.map(({ file_id, file_name }: FileResponse) => (
                <S.FileItem key={file_id}>
                  <S.FileName>{file_name}</S.FileName>
                  <S.DeleteButton data-file-id={file_id} onClick={onClickDelete} />
                </S.FileItem>
              ))}
            </S.FileListBox>
          </>
        )}
        <S.Label>첨부파일</S.Label>
        <S.FileListBox>
          {files.map(({ name }: File, index: number) => (
            <S.FileItem key={index}>
              <S.FileName>{name}</S.FileName>
              <S.DeleteButton data-index={index} onClick={onClickDeleteLocalFile} />
            </S.FileItem>
          ))}
        </S.FileListBox>
        <S.ButtonsBox>
          <S.SubmitButton onClick={onClickSubmit}>
            {isSubmitLoading ? '제출중...' : '제출'}
          </S.SubmitButton>
          <S.CancleButton onClick={cancelButtonClickHandler}>취소</S.CancleButton>
        </S.ButtonsBox>
        <input
          type='file'
          ref={inputRef}
          hidden
          onChange={onChange}
          multiple
          accept='.hwp,.jpg,.png,.jpeg,.pptx,.word,.pdf,.zip'
        />
      </S.FileSubmitModalBox>
    </Modal>
  );
};

export default FileSubmitModal;
