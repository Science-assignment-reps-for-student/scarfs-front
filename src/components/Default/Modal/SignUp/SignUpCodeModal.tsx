import React, { FC, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Modal, { ModalInput, ModalCodeInput, ModalEmailInput } from '../Default';
import * as S from '../style';
import {
  setEmail,
  setEmailCode,
  setPassword,
  setPasswordCheck,
  reset,
} from '../../../../modules/reducer/SignUp';
import { setError, setModal, ErrorType } from '../../../../modules/reducer/Modal';
import {
  getStateCallback,
  stateChange,
  isTextEmpty,
  getModalErrorText,
} from '../../../../lib/function';

type PageType = 'email' | 'code';

const SignUpModal: FC = () => {
  const state = useSelector(getStateCallback('SignUp'));
  const { error } = useSelector(getStateCallback('Modal'));
  const { emailCode, email, password, passwordCheck } = state;
  const [isSuccess, successChange] = useState<boolean>(false);
  const [page, pageChange] = useState<PageType>('email');
  const emailChange = stateChange<string>(setEmail);
  const emailCodeChange = stateChange<string>(setEmailCode);
  const passwordChange = stateChange<string>(setPassword);
  const passwordCheckChange = stateChange<string>(setPasswordCheck);
  const errorChange = stateChange<ErrorType>(setError);
  const signUpReset = stateChange(reset);
  const modalChange = stateChange(setModal);

  const isStateAble = useCallback(
    ({ password, passwordCheck }: ReturnType<typeof state>) => {
      return !(isTextEmpty(passwordCheck) || isTextEmpty(password) || !isSuccess);
    },
    [isSuccess],
  );
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      closeModal();
    } else {
      errorHandler();
    }
  }, [state, isSuccess]);
  const closeModal = useCallback(() => {
    errorChange('');
    signUpReset();
    modalChange('');
  }, []);
  const errorHandler = useCallback(() => {
    errorChange('SignInError');
  }, []);
  const codeCheckButtonClickHandler = useCallback(() => {
    // successChange(true);
    errorChange('CodeError');
  }, []);
  const mailSendButtonClickHandler = useCallback(() => {
    // 이메일 보내는 코드!
    pageChange('code');
  }, []);
  const isCodeOrEmailError = useCallback((error: string) => {
    return error.length > 0;
  }, []);
  return (
    <Modal>
      <S.ModalTitleAndLogoWrapper marginTop='44'>
        <S.ModalTitle>SIGNUP</S.ModalTitle>
        <S.ModalIcon />
      </S.ModalTitleAndLogoWrapper>
      {page === 'code' ? (
        <ModalCodeInput
          text='인증번호'
          isSuccess={isSuccess}
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
          다음
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </Modal>
  );
};

export default SignUpModal;
