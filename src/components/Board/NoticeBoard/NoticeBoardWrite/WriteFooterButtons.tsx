import React, { FC } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

interface Props {
  isEditMode: boolean;
  writeOrEditClickHandler: () => void;
  boardId?: number;
}

const WriteFooterButtons: FC<Props> = ({ isEditMode, writeOrEditClickHandler, boardId }) => {
  const history = useHistory();

  return (
    <S.FooterWrapper>
      <S.BlueButton onClick={writeOrEditClickHandler}>
        {isEditMode ? '수정하기' : '등록하기'}
      </S.BlueButton>
      {isEditMode ? (
        <S.BlackButton onClick={() => history.push(`/board/class/${boardId}`)}>취소</S.BlackButton>
      ) : (
        <S.BlackButton onClick={() => history.push('/board/class')}>취소</S.BlackButton>
      )}
    </S.FooterWrapper>
  );
};

export default WriteFooterButtons;
