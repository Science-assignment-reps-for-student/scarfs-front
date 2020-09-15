import React, { FC, ReactElement, ChangeEvent } from 'react';
import * as S from './style';

interface Props {
  name: string;
  labelText: string;
  placeholder: string;
  type: string;
  onChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}

const AdminInput: FC<Props> = ({
  name,
  labelText,
  placeholder,
  type,
  onChangeLogin,
  onClickLogin,
}): ReactElement => {
  const onEnterLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && e.currentTarget.name === 'PW') onClickLogin();
  };

  return (
    <S.AdminLoginFormInputWrap>
      <S.AdminLoginFormInputLabel htmlFor={name}>{labelText}</S.AdminLoginFormInputLabel>
      <S.AdminLoginFormInput
        type={type}
        name={name}
        autoFocus={name === 'ID' && true}
        placeholder={placeholder}
        onChange={onChangeLogin}
        onKeyDown={onEnterLogin}
      />
    </S.AdminLoginFormInputWrap>
  );
};

export default AdminInput;
