import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SignUpCode, SignUpInfo, SignIn } from '../../../components/Default/Modal';
import { AddTeamMemberModal } from '../../../components/Board/DetailPost';
import { ModalType, ModalState } from '../../../modules/reducer/Modal';
import { getStateCallback } from '../../../lib/function';

const ModalContainer: FC = () => {
  const { modal } = useSelector(getStateCallback<ModalState>('Modal'));
  return (
    <>
      {(modal as ModalType) === 'SignUpCode' && <SignUpCode />}
      {(modal as ModalType) === 'SignUpEmail' && <SignUpCode />}
      {(modal as ModalType) === 'SignUpInfo' && <SignUpInfo />}
      {(modal as ModalType) === 'SignIn' && <SignIn />}
      {(modal as ModalType) === 'AddTeamMember' && <AddTeamMemberModal />}
      {(modal as ModalType) === '' && ''}
    </>
  );
};

export default ModalContainer;
