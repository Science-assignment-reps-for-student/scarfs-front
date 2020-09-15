import React, { FC } from 'react';
import * as S from './style';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.CurrentLocation>
        HOME {'>'} 과제안내 {'>'} <S.Bold>상호평가</S.Bold>
      </S.CurrentLocation>
    </S.HeaderWrapper>
  );
};

export default Header;
