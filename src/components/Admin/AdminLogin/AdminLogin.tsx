import React, { FC, ReactElement, useMemo, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import LoginTitle from './LoginTitle';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import HeaderLogo from '../AdminHeader/HeaderLogo';

import { ReducerType } from '../../../modules/store';
import { ID, PW } from '../../../modules/reducer/AdminLogin/reducer';

interface Props {
  onChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}
interface IInputs {
  name: string;
  labelText: string;
  placeholder: string;
  type: string;
}

const inputs: IInputs[] = [
  {
    name: ID,
    labelText: 'Admin ID',
    placeholder: 'ID',
    type: 'text',
  },
  {
    name: PW,
    labelText: 'Password',
    placeholder: 'PASSWORD',
    type: 'password',
  },
];

const AdminLogin: FC<Props> = ({ onChangeLogin, onClickLogin }): ReactElement => {
  const { loading } = useSelector((state: ReducerType) => state.AdminLogin);

  const getInputForm = useMemo(
    () =>
      inputs.map(({ name, labelText, placeholder, type }) => (
        <LoginInput
          key={name}
          type={type}
          name={name}
          labelText={labelText}
          placeholder={placeholder}
          onChangeLogin={onChangeLogin}
          onClickLogin={onClickLogin}
        />
      )),
    [],
  );

  return (
    <S.AdminLoginWrap>
      <S.AdminLoginBack />
      <S.AdminLoginFormWrap>
        <LoginTitle />
        {getInputForm}
        <LoginButton onClickLogin={onClickLogin} loading={loading} />
        <S.AdminLoginFormBottomWrap>
          <HeaderLogo />
        </S.AdminLoginFormBottomWrap>
      </S.AdminLoginFormWrap>
    </S.AdminLoginWrap>
  );
};

export default AdminLogin;
