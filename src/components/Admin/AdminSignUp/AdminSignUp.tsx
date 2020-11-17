import React, { FC, ReactElement, ChangeEvent } from 'react';

import * as S from './style';

import { defaultLoading } from '../../../assets/Admin';

interface Props {
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRegister: () => void;
  loading: boolean;
}

interface Inputs {
  type: string;
  text: string;
}

const inputs: Inputs[] = [
  {
    type: 'text',
    text: 'email',
  },
  {
    type: 'password',
    text: 'password',
  },
  {
    type: 'password',
    text: 'confirm_password',
  },
  {
    type: 'text',
    text: 'name',
  },
];

const AdminSignUp: FC<Props> = ({ onChangeInput, onClickRegister, loading }): ReactElement => {
  return (
    <S.AdminSignUpWrap>
      <S.SignUpFormWrap>
        {inputs.map(({ type, text }) => (
          <S.SignUpLabel key={text}>
            <S.SignUpType>{text}</S.SignUpType>
            <S.SignUpInput
              type={type}
              name={text}
              placeholder={text}
              onChange={onChangeInput}
              autoComplete='off'
            />
          </S.SignUpLabel>
        ))}
        <S.SignUpButton onClick={onClickRegister}>
          <span>회원가입</span>
          {loading && <S.SignUpLoading src={defaultLoading} alt='loading' title='loading' />}
        </S.SignUpButton>
      </S.SignUpFormWrap>
    </S.AdminSignUpWrap>
  );
};

export default AdminSignUp;
