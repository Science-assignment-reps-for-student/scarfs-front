import React, { FC, ReactElement } from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderAccountButton from './HeaderAccountButton';
import * as S from './style';

interface Props {}

const AdminHeader: FC<Props> = (): ReactElement => {
  return (
    <S.AdminHeader>
      <HeaderLogo />
      <HeaderAccountButton />
    </S.AdminHeader>
  );
};

export default AdminHeader;
