import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Modal, { ModalInput, ModalCodeInput, ModalEmailInput } from '../Default';
import * as S from '../style';
import {
  setEmail,
  setEmailCode,
  setPassword,
  setPasswordCheck,
  SignUpState,
} from '../../../../modules/reducer/SignUp';
import {
  getStateCallback,
  stateChange,
  isTextEmpty,
  getModalErrorText,
} from '../../../../lib/function';
import { setError, ErrorType, ModalState } from '../../../../modules/reducer/Modal';
import { signup, emailCheck, emailSend } from '../../../../modules/reducer/Header';
import { EmailCheckType, EmailSendType, SignUpType } from 'lib/api/Header/signup';

const SignUpModal: FC = () => {
  const state = useSelector(getStateCallback<SignUpState>('SignUp'));
  const { error, modal } = useSelector(getStateCallback<ModalState>('Modal'));
  const { emailCode, email, password, passwordCheck, isEmailCheck, code, name, number } = state;
  const emailChange = stateChange<string>(setEmail);
  const emailCodeChange = stateChange<string>(setEmailCode);
  const passwordChange = stateChange<string>(setPassword);
  const passwordCheckChange = stateChange<string>(setPasswordCheck);
  const errorChange = stateChange<ErrorType>(setError);
  const emailSendChange = stateChange<EmailSendType>(emailSend);
  const emailCheckChange = stateChange<EmailCheckType>(emailCheck);
  const signUpChange = stateChange<SignUpType>(signup);

  const isStateAble = useCallback(({ password, passwordCheck }: SignUpState) => {
    return !(isTextEmpty(passwordCheck) || isTextEmpty(password) || isEmailCheck);
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      signUpChange({ number, password, authCode: code, name });
    } else {
      errorHandler();
    }
  }, [state]);
  const errorHandler = useCallback(() => {
    errorChange('SignInError');
  }, []);
  const codeCheckButtonClickHandler = useCallback(() => {
    emailCheckChange({ email, code: emailCode });
  }, [email, code]);
  const mailSendButtonClickHandler = useCallback(() => {
    emailSendChange({ email });
  }, [email]);
  const isCodeOrEmailError = useCallback((error: string) => {
    return error.length > 0;
  }, []);
  return (
    <Modal>
      <S.ModalTitleAndLogoWrapper marginTop='44'>
        <S.ModalTitle>SIGNUP</S.ModalTitle>
        <S.ModalIcon />
      </S.ModalTitleAndLogoWrapper>
      {modal === 'SignUpCode' ? (
        <ModalCodeInput
          text='인증번호'
          isSuccess={isEmailCheck}
          isError={isCodeOrEmailError(error)}
          onClick={codeCheckButtonClickHandler}
          value={emailCode}
          onChange={emailCodeChange}
          placeholder='이메일로 전송된 인증코드를 입력하세요.'
        />
      ) : (
        <ModalEmailInput
          text='이메일 주소'
          onClick={mailSendButtonClickHandler}
          isError={isCodeOrEmailError(error)}
          value={email}
          onChange={emailChange}
          placeholder='이메일 주소를 입력해주세요.'
        />
      )}
      <ModalInput
        text='비밀번호'
        value={password}
        valueChange={passwordChange}
        placeholder='6 ~ 12자, 영문과 숫자 조합으로 만드세요.'
        type='password'
      />
      <ModalInput
        text='비밀번호 재확인'
        value={passwordCheck}
        valueChange={passwordCheckChange}
        placeholder='비밀번호를 다시 입력해주세요.'
        type='password'
      />
      <S.ModalErrorText>{getModalErrorText(error)}</S.ModalErrorText>
      <S.ModalButtonWrapper>
        <S.ModalButton onClick={buttonClickHandler} whiteThema={false}>
          회원가입
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </Modal>
  );
};

export default SignUpModal;
