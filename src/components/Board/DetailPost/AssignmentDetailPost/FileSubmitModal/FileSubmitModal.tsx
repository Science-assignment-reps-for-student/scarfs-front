import React, { FC, useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './style';
import { Modal } from '../../Modal';
import { reset } from '../../../../../modules/reducer/Modal';
import { stateChange, isAbleFileExt } from '../../../../../lib/function';
import { ReducerType } from '../../../../../modules/store';
import { FileResponse } from '../../../../../lib/api/FileSubmit';
import { ErrorType } from '../../../../../lib/type';

interface Props {
  getSubmittedFiles: (type: string, assignmentId: number) => void;
  submittedFiles: FileResponse[];
  getSubmittedFilesError: ErrorType;
}

const FileSubmitModal: FC<Props> = ({
  getSubmittedFiles,
  submittedFiles,
  getSubmittedFilesError,
}) => {
  const location = useLocation();
  const assignmentId = parseInt(location.pathname.split('/')[3]);
  const { type } = useSelector(
    (state: ReducerType) => state.AssignmentDetailPost.assignmentDetailPost,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const history = useHistory();
  const [isOvered, setIsOvered] = useState(false);
  const closeModal = stateChange(reset);

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
            setFiles(prev => [...prev, file]);
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
        newFiles.push(files.item(i));
      }
      return newFiles;
    });
  };

  const onClickDelete = useCallback(
    (deleteIndex: number) => {
      const filteredFiles: File[] = files.filter((file: File, index) => index !== deleteIndex);
      setFiles(filteredFiles);
    },
    [files],
  );

  useEffect(() => {
    getSubmittedFiles(type, assignmentId);
  }, []);

  useEffect(() => {
    if (getSubmittedFilesError.status) {
      alert(`Error code: ${getSubmittedFilesError.status} 제출한 파일 불러오기 실패!`);
    }
  }, [getSubmittedFilesError]);

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
                  <S.DeleteButton onClick={() => onClickDelete(file_id)} />
                </S.FileItem>
              ))}
            </S.FileListBox>
          </>
        )}
        <S.Label>첨부파일</S.Label>
        <S.FileListBox>
          {files.map(({ name }: File, index: number) => (
            <S.FileItem key={index}>
              <S.FileName href='http://www.naver.com'>{name}</S.FileName>
              <S.DeleteButton onClick={() => onClickDelete(index)} />
            </S.FileItem>
          ))}
        </S.FileListBox>
        <S.ButtonsBox>
          <S.SubmitButton onClick={() => history.push('/board/assignment-guide')}>
            제출
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
