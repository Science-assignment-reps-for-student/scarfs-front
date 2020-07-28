import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Modal, { ModalInput, ModalHalfInput } from '../Default';
import * as S from '../style';
import {
  getStateCallback,
  stateChange,
  isTextEmpty,
  getModalErrorText,
} from '../../../../lib/function';
import { setName, setNumber, setCode, SignUpState } from '../../../../modules/reducer/SignUp';
import {
  ErrorType,
  setError,
  setModal,
  ModalType,
  ModalState,
} from '../../../../modules/reducer/Modal';

const SignUpInfoModal: FC = () => {
  const state = useSelector(getStateCallback<SignUpState>('SignUp'));
  const { error } = useSelector(getStateCallback<ModalState>('Modal'));
  const { number, name, code } = state;
  const nameChange = stateChange<string>(setName);
  const numberChange = stateChange<string>(setNumber);
  const codeChange = stateChange<string>(setCode);
  const modalChange = stateChange<ModalType>(setModal);
  const errorChange = stateChange<ErrorType>(setError);

  const isStateAble = useCallback(({ name, code, number }: SignUpState) => {
    return !(isTextEmpty(name) || isTextEmpty(number) || isTextEmpty(code));
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (isStateAble(state)) {
      goToNextModal();
    } else {
      errorHandler();
    }
  }, [state]);
  const goToNextModal = useCallback(() => {
    errorChange('');
    modalChange('SignUpEmail');
  }, []);
  const errorHandler = useCallback(() => {
    errorChange('SignInError');
  }, []);
  return (
    <Modal>
      <S.ModalTitleAndLogoWrapper marginTop='77'>
        <S.ModalTitle>SIGNUP</S.ModalTitle>
        <S.ModalIcon />
      </S.ModalTitleAndLogoWrapper>
      <S.ModalHalfInputWrapper>
        <ModalHalfInput text='학번' value={number} valueChange={numberChange} placeholder='1111' />
        <ModalHalfInput text='이름' value={name} valueChange={nameChange} placeholder='홍길동' />
      </S.ModalHalfInputWrapper>
      <ModalInput
        text='개인 인증번호'
        value={code}
        valueChange={codeChange}
        placeholder='개인 인증 번호를 입력하세요.'
      />
      <S.ModalErrorText>{getModalErrorText(error)}</S.ModalErrorText>
      <S.ModalButtonWrapper>
        <S.ModalButton whiteThema={false} onClick={buttonClickHandler}>
          다음
        </S.ModalButton>
      </S.ModalButtonWrapper>
    </Modal>
  );
};

export default SignUpInfoModal;
