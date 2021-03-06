import React, { FC, ReactElement } from 'react';

import * as S from './style';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderAccountButton from './HeaderAccountButton';

interface Props {}

const AdminHeader: FC<Props> = (): ReactElement => {
  return (
    <S.AdminHeader>
      <S.HeaderWrap>
        <S.HeaderLeftWrap>
          <HeaderLogo />
          <HeaderNav />
        </S.HeaderLeftWrap>
        <HeaderAccountButton />
      </S.HeaderWrap>
    </S.AdminHeader>
  );
};

export default AdminHeader;
