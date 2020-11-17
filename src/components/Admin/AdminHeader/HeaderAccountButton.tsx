import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {}

const HeaderAccountButton: FC<Props> = (): ReactElement => {
  const accessToken = localStorage.getItem('accessToken');

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <S.HeaderLink to='/admin/login' onClick={logout}>
      {accessToken ? '로그아웃' : '로그인'}
      <div className='hovered' />
    </S.HeaderLink>
  );
};

export default HeaderAccountButton;
