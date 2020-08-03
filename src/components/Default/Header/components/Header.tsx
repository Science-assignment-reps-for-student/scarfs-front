import React, { FC } from 'react';
import { setModal } from '../../../../modules/reducer/Modal';
import * as S from '../style';
import { stateChange } from '../../../../lib/function';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import HeaderUserButton from './HeaderUserButton';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const modalChange = stateChange(setModal);
  return (
    <S.Header>
      <div className='header'>
        <div className='wrapper'>
          <Link to='/'>
            <S.HeaderTitle>SCARFS</S.HeaderTitle>
          </Link>
          <HeaderSearch />
          <HeaderButton link='/'>메인</HeaderButton>
          <HeaderButton link='/board/notice'>공지사항</HeaderButton>
          <HeaderButton link='/board/assignment-guide'>과제</HeaderButton>
          <HeaderButton link='/board/class'>게시판</HeaderButton>
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
