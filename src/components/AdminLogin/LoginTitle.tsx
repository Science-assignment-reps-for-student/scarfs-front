import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const AdminTitle: FC<Props> = (): ReactElement => {
  return <S.AdminLoginFormTitle>LOGIN</S.AdminLoginFormTitle>;
};

export default AdminTitle;
