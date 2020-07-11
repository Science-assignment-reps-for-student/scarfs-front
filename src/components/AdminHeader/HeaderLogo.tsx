import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const HeaderLogo: FC<Props> = (): ReactElement => {
  return (
    <S.HeaderLogoWrap>
      <S.HeaderLogoScarfs>SCARFS</S.HeaderLogoScarfs>{' '}
      <S.HeaderLogoConsole>Admin console</S.HeaderLogoConsole>
    </S.HeaderLogoWrap>
  );
};

export default HeaderLogo;
