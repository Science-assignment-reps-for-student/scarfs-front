import React, { FC } from 'react';
import { reset, setModal } from '../../../../modules/reducer/Modal';
import { stateChange } from '../../../../lib/function';
import * as S from './style';

interface Props {
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ children }) => {
  const resetModal = stateChange(reset);
  const deleteButtonClickHandler = () => resetModal();
  return (
    <S.ModalWrapper>
      <S.Modal>
        <S.ModalHeader>
          <div className='deleteImg' onClick={deleteButtonClickHandler} />
        </S.ModalHeader>
        {children}
      </S.Modal>
    </S.ModalWrapper>
  );
};

export default Modal;
