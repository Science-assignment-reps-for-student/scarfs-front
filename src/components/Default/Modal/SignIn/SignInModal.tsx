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
import { setEmail, setPassword, reset } from '../../../../modules/reducer/SignIn';
import { setError, setModal, ErrorType } from '../../../../modules/reducer/Modal';

const SignInModal: FC = () => {
  const state = useSelector(getStateCallback('SignIn'));
  const { error } = useSelector(getStateCallback('Modal'));
  const { email, password } = state;
  const emailChange = stateChange<string>(setEmail);
  const passwordChange = stateChange<string>(setPassword);
  const errorChange = stateChange<ErrorType>(setError);
  const signInReset = stateChange(reset);
  const modalChange = stateChange(setModal);
  const isStateAble = useCallback(({ email, password }: ReturnType<typeof state>) => {
    return !(isTextEmpty(email) || isTextEmpty(password));
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      closeModal();
    } else {
      errorHandler();
    }
  }, [state]);
  const closeModal = useCallback(() => {
    errorChange('');
    signInReset();
    modalChange('');
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
        <S.ModalButton onClick={buttonClickHandler} whiteThema={true}>
          회원가입
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </Modal>
  );
};

export default SignInModal;
