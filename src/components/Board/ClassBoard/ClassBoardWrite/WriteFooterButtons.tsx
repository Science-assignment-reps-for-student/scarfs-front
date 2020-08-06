import React, { FC } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

const WriteFooterButtons: FC = () => {
  const history = useHistory();
  return (
    <S.FooterWrapper>
      <S.BlueButton>등록하기</S.BlueButton>
      <S.BlackButton onClick={() => history.push('/board/class')}>취소</S.BlackButton>
    </S.FooterWrapper>
  );
};

export default WriteFooterButtons;
