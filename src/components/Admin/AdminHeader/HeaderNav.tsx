import React, { FC, ReactElement, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';

interface Props {}

const HeaderNav: FC<Props> = (): ReactElement => {
  const location = useLocation();

  const stopEvt = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onClickCheckAccessToken = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!localStorage.getItem('accessToken')) {
      stopEvt(e);
    }
  };

  return (
    <S.HeaderNavWrap>
      <S.HeaderNavItem>
        <S.HeaderLink
          to='/admin'
          onClick={onClickCheckAccessToken}
          className={location.pathname === '/admin' && 'visit'}
        >
          제출현황
          <div className='hovered' />
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink
          to='/admin/create'
          onClick={onClickCheckAccessToken}
          className={location.pathname === '/admin/create' && 'visit'}
        >
          과제생성
          <div className='hovered' />
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink
          to='/admin/qna'
          onClick={onClickCheckAccessToken}
          className={location.pathname === '/admin/qna' && 'visit'}
        >
          QnA
          <div className='hovered' />
        </S.HeaderLink>
      </S.HeaderNavItem>
    </S.HeaderNavWrap>
  );
};

export default HeaderNav;
