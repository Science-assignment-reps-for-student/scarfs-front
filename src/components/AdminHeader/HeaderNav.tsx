import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

interface Props {}

const HeaderNav: FC<Props> = (): ReactElement => {
  const location = useLocation();

  return (
    <S.HeaderNavWrap>
      <S.HeaderNavItem>
        <S.HeaderLink to='/admin' className={location.pathname === '/admin' && 'visit'}>
          제출현황<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink
          to='/admin/create'
          className={location.pathname === '/admin/create' && 'visit'}
        >
          과제생성<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink to='/admin' className={location.pathname === '/admin/qna' && 'visit'}>
          QnA<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
    </S.HeaderNavWrap>
  );
};

export default HeaderNav;
