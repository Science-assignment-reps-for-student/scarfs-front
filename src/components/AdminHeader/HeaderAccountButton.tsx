import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const HeaderAccountButton: FC<Props> = (): ReactElement => {
  const accessToken = localStorage.getItem('accessToken');

  const test = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <S.HeaderAccountButtonWrap>
      <S.HeaderLink to='/admin/login' onClick={test}>
        {accessToken ? '로그아웃' : '로그인'}
        <div className='hovered'></div>
      </S.HeaderLink>
    </S.HeaderAccountButtonWrap>
  );
};

export default HeaderAccountButton;
