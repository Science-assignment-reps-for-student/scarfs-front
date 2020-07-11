import React, { FC } from 'react';
import * as S from '../../../style/Default/Header';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import HeaderUserButton from './HeaderUserButton';

const Header: FC = () => {
  return (
    <S.Header>
      <div className="header">
        <div className="wrapper">
          <S.HeaderTitle>SCARFS</S.HeaderTitle>
          <HeaderSearch />
          <HeaderButton>메인</HeaderButton>
          <HeaderButton>공지사항</HeaderButton>
          <HeaderButton>과제</HeaderButton>
          <HeaderButton>게시판</HeaderButton>
        </div>
        <S.HeaderUserButtonWrapper>
          <HeaderUserButton>로그인</HeaderUserButton>
          <div className="bar" />
          <HeaderUserButton>회원가입</HeaderUserButton>
        </S.HeaderUserButtonWrapper>
      </div>
    </S.Header>
  );
};

export default Header;
