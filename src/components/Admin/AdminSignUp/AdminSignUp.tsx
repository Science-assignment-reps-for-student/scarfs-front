import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const AdminSignUp: FC<Props> = (): ReactElement => {
  return (
    <S.AdminSignUpWrap>
      <S.SignUpFormWrap>
        <label>
          <div>Email</div>
          <input type='text' placeholder='email' />
        </label>
        <label>
          <div>Password</div>
          <input type='password' placeholder='password' />
        </label>
        <label>
          <div>Name</div>
          <input type='text' placeholder='name' />
        </label>
        <button>회원가입</button>
      </S.SignUpFormWrap>
    </S.AdminSignUpWrap>
  );
};

export default AdminSignUp;
