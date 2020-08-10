import React, { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal, { ModalInput } from '../Default';
import * as S from '../style';
import {
  getStateCallback,
  stateChange,
  isTextEmpty,
  getModalErrorText,
} from '../../../../lib/function';
import { setEmail, setPassword, SignInState } from '../../../../modules/reducer/SignIn';
import {
  setError,
  setModal,
  ErrorType,
  ModalType,
  ModalState,
} from '../../../../modules/reducer/Modal';
import { signin, HeaderState } from '../../../../modules/reducer/Header';
import { SignInThunkType } from '../../../../lib/api/Header/signin';

const SignInModal: FC = () => {
  const state = useSelector(getStateCallback<SignInState>('SignIn'));
  const { error } = useSelector(getStateCallback<ModalState>('Modal'));
  const { loading } = useSelector(getStateCallback<HeaderState>('Header'));
  const { email, password } = state;
  const emailChange = stateChange<string>(setEmail);
  const passwordChange = stateChange<string>(setPassword);
  const errorChange = stateChange<ErrorType>(setError);
  const modalChange = stateChange<ModalType>(setModal);
  const signinChange = stateChange<SignInThunkType>(signin);
  const isStateAble = useCallback(({ email, password }: SignInState) => {
    return !(isTextEmpty(email) || isTextEmpty(password));
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      signinChange({
        serverType: {
          password,
          email,
        },
        loading,
      });
    } else {
      errorHandler();
    }
  }, [state, loading]);
  const signUpButtonClickHandler = useCallback(() => {
    modalChange('SignUpInfo');
  }, []);
  const errorHandler = useCallback(() => {
    errorChange('SignInError');
  }, []);
  useEffect(() => {
    errorChange('');
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
