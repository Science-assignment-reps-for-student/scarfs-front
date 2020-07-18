import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  onClickLogin: () => void;
}

const AdminButton: FC<Props> = ({ onClickLogin }): ReactElement => {
  return <S.AdminLoginFormButton onClick={onClickLogin}>로그인</S.AdminLoginFormButton>;
};

export default AdminButton;
