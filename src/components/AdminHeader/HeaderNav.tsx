import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props { }

const HeaderNav: FC<Props> = (): ReactElement => {
  return <S.HeaderNavWrap>
    <S.HeaderNavItem className="selected">제출현황</S.HeaderNavItem>
    <S.HeaderNavItem>과제생성</S.HeaderNavItem>
    <S.HeaderNavItem>QnA</S.HeaderNavItem>
  </S.HeaderNavWrap>;
};

export default HeaderNav;
