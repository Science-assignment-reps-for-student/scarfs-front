import React, { FC, useCallback } from 'react';
import { reset, setModal } from '../../../../modules/reducer/Modal';
import { stateChange } from '../../../../lib/function';
import * as S from '../style';

interface Props {
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ children }) => {
  const deleteModal = stateChange(setModal);
  const resetModal = stateChange(reset);
  const deleteButtonClickHandler = useCallback(() => {
    deleteModal('');
    resetModal();
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
      <S.ModalBackground />
    </S.ModalWrapper>
  );
};

export default Modal;
