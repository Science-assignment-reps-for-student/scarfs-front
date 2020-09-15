import React, { FC } from 'react';
import LogoText from './LogoText';
import * as S from '../style';

const LogOutedMain: FC = () => {
  return (
    <S.Body>
      <S.SideBar>
        <p>SCIENCE</p>
      </S.SideBar>
      <S.LogOutedWrapper>
        <S.LogOutedLogo />
        <LogoText />
      </S.LogOutedWrapper>
    </S.Body>
  );
};

export default LogOutedMain;
