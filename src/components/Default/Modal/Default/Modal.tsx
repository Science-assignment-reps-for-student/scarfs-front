import React, { FC, useCallback } from 'react';
import { reset } from '../../../../modules/reducer/Modal';
import { stateChange } from '../../../../lib/function';
import * as S from '../style';
import { resetSignIn } from '../../../../modules/reducer/SignIn';
import { resetSignUp } from '../../../../modules/reducer/SignUp';

interface Props {
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ children }) => {
  const resetModalChange = stateChange(reset);
  const resetSignInChange = stateChange(resetSignIn);
  const resetSignUpChange = stateChange(resetSignUp);
  const deleteButtonClickHandler = useCallback(() => {
    resetModalChange();
    resetSignInChange();
    resetSignUpChange();
  }, []);
  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.ModalHeader>
          <div className='deleteImg' onClick={deleteButtonClickHandler} />
        </S.ModalHeader>
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalSubTitle>DAEDEOK SOFTWARE MEISTER HIGH SCHOOL</S.ModalSubTitle>
      </S.Modal>
      <S.ModalBackground onClick={deleteButtonClickHandler} />
    </S.ModalWrapper>
  );
};

export default Modal;
