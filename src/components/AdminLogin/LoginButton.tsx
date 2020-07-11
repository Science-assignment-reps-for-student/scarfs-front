import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const AdminButton: FC<Props> = (): ReactElement => {
  return <S.AdminLoginFormButton>로그인</S.AdminLoginFormButton>;
};

export default AdminButton;
