import React, { FC, useCallback } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';
import { useHistory } from 'react-router-dom';
import { stateChange } from '../../../../../lib/function';
import { reset } from '../../../../../modules/reducer/Modal';

const FileSubmitModal: FC<{}> = () => {
  const history = useHistory();
  const closeModal = stateChange(reset);
  const cancelButtonClickHandler = () => {
    closeModal();
  };
  return (
    <Modal>
      <S.FileSubmitModalBox>
        <S.FileDragBox>
          <S.FilePlusButton />
          <S.ExplainText>클릭 또는 이곳으로 파일을 드래그하세요.</S.ExplainText>
        </S.FileDragBox>
        <S.Label>첨부파일</S.Label>
        <S.FileListBox>
          <S.FileItem>
            <S.FileName href='http://www.naver.com'>전구 깨기 보고서.hwp</S.FileName>
            <S.DeleteButton />
          </S.FileItem>
          <S.FileItem>
            <S.FileName href='http://www.naver.com'>깬개수.md</S.FileName>
            <S.DeleteButton />
          </S.FileItem>
          <S.FileItem>
            <S.FileName href='http://www.naver.com'>깬개수.md</S.FileName>
            <S.DeleteButton />
          </S.FileItem>
          <S.FileItem>
            <S.FileName href='http://www.naver.com'>
              깬개수sdfsjfsjfksjfkjsdfjksldjkfdjklfsl깬개수sdfsjfsjfksjfkjsdfjksldjkfdjklfsl.md
            </S.FileName>
            <S.DeleteButton />
          </S.FileItem>
        </S.FileListBox>
        <S.ButtonsBox>
          <S.SubmitButton onClick={() => history.push('/board/assignment-guide')}>
            제출
          </S.SubmitButton>
          <S.CancleButton onClick={cancelButtonClickHandler}>취소</S.CancleButton>
        </S.ButtonsBox>
      </S.FileSubmitModalBox>
    </Modal>
  );
};

export default FileSubmitModal;
