import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  name: string;
  labelText: string;
  placeholder: string;
  type: string;
}

const AdminInput: FC<Props> = ({
  name,
  labelText,
  placeholder,
  type,
}): ReactElement => {
  return (
    <S.AdminLoginFormInputWrap>
      <S.AdminLoginFormInputLabel htmlFor={name}>{labelText}</S.AdminLoginFormInputLabel>
      <S.AdminLoginFormInput type={type} name={name} placeholder={placeholder} />
    </S.AdminLoginFormInputWrap>
  );
};

export default AdminInput;
