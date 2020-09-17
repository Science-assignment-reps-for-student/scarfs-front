import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { defaultLoading } from '../../../assets/Admin';

interface Props {
  onClickLogin: () => void;
  loading: boolean;
}

const AdminButton: FC<Props> = ({ onClickLogin, loading }): ReactElement => {
  return (
    <S.AdminLoginFormButton onClick={onClickLogin} loading={loading ? 'true' : 'false'}>
      로그인
      {loading && <S.LoginFormButtonLoading src={defaultLoading} alt='loading' title='loading' />}
    </S.AdminLoginFormButton>
  );
};

export default AdminButton;
