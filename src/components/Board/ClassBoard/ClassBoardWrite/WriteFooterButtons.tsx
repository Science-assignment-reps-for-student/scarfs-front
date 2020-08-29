import React, { FC, useEffect } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

interface Props {
  isEditMode: boolean;
  writeOrEditClickHandler: () => void;
}

const WriteFooterButtons: FC<Props> = ({ isEditMode, writeOrEditClickHandler }) => {
  const history = useHistory();
  return (
    <S.FooterWrapper>
      <S.BlueButton>{isEditMode ? '수정하기' : '등록하기'}</S.BlueButton>
      <S.BlackButton onClick={() => history.push('/board/class')}>취소</S.BlackButton>
    </S.FooterWrapper>
  );
};

export default WriteFooterButtons;
