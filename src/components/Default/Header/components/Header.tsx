import React, { FC } from 'react';
import * as S from '../style';
import HeaderButton from './HeaderButton';
import HeaderSearch from './HeaderSearch';
import HeaderUserButton from './HeaderUserButton';
import { Link } from 'react-router-dom';
import AlertModal from '../../../../components/AlertModal/AlertModal';

interface Props {
  isLogin: boolean;
  modalChange: (value: string) => void;
  logoutHandler: (value: boolean) => void;
  userName?: string;
}

const Header: FC<Props> = ({ logoutHandler, modalChange, isLogin, userName }) => {
  return (
    <S.Header>
      <AlertModal type='warn' />
      <div className='header'>
        <div className='wrapper'>
          <Link to='/'>
            <S.HeaderTitle>SCARFS</S.HeaderTitle>
          </Link>
          <HeaderSearch isLogin={isLogin} />
          <HeaderButton isLogin={isLogin} link='/'>
            메인
          </HeaderButton>
          <HeaderButton isLogin={isLogin} link='/board/notice'>
            공지사항
          </HeaderButton>
          <HeaderButton isLogin={isLogin} link='/board/assignment-guide'>
            과제
          </HeaderButton>
          <HeaderButton isLogin={isLogin} link='/board/class'>
            게시판
          </HeaderButton>
          {isLogin ? (
            <S.HeaderUserButtonWrapper>
              <p>
                <strong>{userName}</strong>님 안녕하세요.
              </p>
              <div className='bar' />
              <HeaderUserButton onClick={logoutHandler} value=''>
                로그아웃
              </HeaderUserButton>
            </S.HeaderUserButtonWrapper>
          ) : (
            <S.HeaderUserButtonWrapper>
              <HeaderUserButton onClick={modalChange} value='SignIn'>
                로그인
              </HeaderUserButton>
              <div className='bar' />
              <HeaderUserButton onClick={modalChange} value='SignUpInfo'>
                회원가입
              </HeaderUserButton>
            </S.HeaderUserButtonWrapper>
          )}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
