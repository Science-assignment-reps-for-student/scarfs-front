import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {}

const HeaderLogo: FC<Props> = (): ReactElement => {
  return (
    <S.HeaderLogoLink to='/' title='메인 페이지 바로가기'>
      <S.HeaderLogoWrap>
        <S.HeaderLogoScarfs>SCARFS</S.HeaderLogoScarfs>{' '}
        <S.HeaderLogoConsole>Admin console</S.HeaderLogoConsole>
      </S.HeaderLogoWrap>
    </S.HeaderLogoLink>
  );
};

export default HeaderLogo;
