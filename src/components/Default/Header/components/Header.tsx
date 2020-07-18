import React, { FC } from 'react';
import { setModal } from '../../../../modules/reducer/Modal';
import * as S from '../style';
import { stateChange } from '../../../../lib/function';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import HeaderUserButton from './HeaderUserButton';

const Header: FC = () => {
  const modalChange = stateChange(setModal);
  return (
    <S.Header>
      <div className='header'>
        <div className='wrapper'>
          <S.HeaderTitle>SCARFS</S.HeaderTitle>
          <HeaderSearch />
          <HeaderButton>메인</HeaderButton>
          <HeaderButton>공지사항</HeaderButton>
          <HeaderButton>과제</HeaderButton>
          <HeaderButton>게시판</HeaderButton>
        </div>
        <S.HeaderUserButtonWrapper>
          <HeaderUserButton onClick={modalChange} value='SignIn'>
            로그인
          </HeaderUserButton>
          <div className='bar' />
          <HeaderUserButton onClick={modalChange} value='SignUpInfo'>
            회원가입
          </HeaderUserButton>
        </S.HeaderUserButtonWrapper>
      </div>
    </S.Header>
  );
};

export default Header;
