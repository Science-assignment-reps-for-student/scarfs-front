import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Modal, { ModalInput } from '../Default';
import * as S from '../style';
import {
  getStateCallback,
  stateChange,
  isTextEmpty,
  getModalErrorText,
} from '../../../../lib/function';
import { setEmail, setPassword } from '../../../../modules/reducer/SignIn';
import { setError, setModal, ErrorType, ModalType } from '../../../../modules/reducer/Modal';
import { signin } from '../../../../modules/reducer/Header';
import { SignInType } from '../../../../lib/api/Header/signin';

const SignInModal: FC = () => {
  const state = useSelector(getStateCallback('SignIn'));
  const { error } = useSelector(getStateCallback('Modal'));
  const { email, password } = state;
  const emailChange = stateChange<string>(setEmail);
  const passwordChange = stateChange<string>(setPassword);
  const errorChange = stateChange<ErrorType>(setError);
  const modalChange = stateChange<ModalType>(setModal);
  const signinChange = stateChange<SignInType>(signin);
  const isStateAble = useCallback(({ email, password }: ReturnType<typeof state>) => {
    return !(isTextEmpty(email) || isTextEmpty(password));
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      signinChange({ email, password });
    } else {
      errorHandler();
    }
  }, [state]);
  const signUpButtonClickHandler = useCallback(() => {
    modalChange('SignUpInfo');
  }, []);
  const errorHandler = useCallback(() => {
    errorChange('SignInError');
  }, []);
  return (
    <Modal>
      <S.ModalTitleAndLogoWrapper marginTop='77'>
        <S.ModalTitle>LOGIN</S.ModalTitle>
        <S.ModalIcon />
      </S.ModalTitleAndLogoWrapper>
      <ModalInput
        text='이메일 주소'
        value={email}
        valueChange={emailChange}
        placeholder='sample@dsm.hs.kr'
      />
      <ModalInput
        text='패스워드'
        value={password}
        valueChange={passwordChange}
        type='password'
        placeholder='*******'
      />
      <S.ModalErrorText>{getModalErrorText(error)}</S.ModalErrorText>
      <S.ModalButtonWrapper>
        <S.ModalButton onClick={buttonClickHandler} whiteThema={false}>
          로그인
        </S.ModalButton>
        <S.ModalButton onClick={signUpButtonClickHandler} whiteThema={true}>
          회원가입
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </Modal>
  );
};

export default SignInModal;
