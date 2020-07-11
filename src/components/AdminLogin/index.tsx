import React, { FC, ReactElement } from 'react';
import HeaderLogo from '../AdminHeader/HeaderLogo';
import LoginTitle from './LoginTitle';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import * as S from './style';

interface Props {}

interface IInputs {
  name: string;
  labelText: string;
  placeholder: string;
  type: string;
}

const AdminLogin: FC<Props> = (): ReactElement => {
  const inputs: IInputs[] = [
    {
      name: 'id',
      labelText: 'Admin id',
      placeholder: 'id',
      type: 'text',
    },
    {
      name: 'pw',
      labelText: 'Password',
      placeholder: 'PASSWORD',
      type: 'password',
    },
  ];

  const getInputForm = () => {
    return inputs.map(({ name, labelText, placeholder, type }) => (
      <LoginInput key={name} type={type} name={name} labelText={labelText} placeholder={placeholder} />
    ));
  };

  return (
    <S.AdminLoginWrap>
      <S.AdminLoginBack />
      <S.AdminLoginFormWrap>
        <LoginTitle />
        {getInputForm()}
        <LoginButton />
        <S.AdminLoginFormBottomWrap>
          <HeaderLogo />
        </S.AdminLoginFormBottomWrap>
      </S.AdminLoginFormWrap>
    </S.AdminLoginWrap>
  );
};

export default AdminLogin;