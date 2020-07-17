import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const HeaderNav: FC<Props> = (): ReactElement => {
  return (
    <S.HeaderNavWrap>
      <S.HeaderNavItem className='selected'>
        <S.HeaderLink to='/admin'>
          제출현황<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink to='/admin'>
          과제생성<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
      <S.HeaderNavItem>
        <S.HeaderLink to='/admin'>
          QnA<div className='hovered'></div>
        </S.HeaderLink>
      </S.HeaderNavItem>
    </S.HeaderNavWrap>
  );
};

export default HeaderNav;
