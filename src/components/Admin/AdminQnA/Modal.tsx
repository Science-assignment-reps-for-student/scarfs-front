import React, { FC, ReactElement } from 'react';

import * as S from './style';
import ModalHeader from './ModalHeader';
import ModalList from './ModalList';

interface Props {
  onClickToggleModal: any;
}

const AdminQnAModal: FC<Props> = ({ onClickToggleModal }): ReactElement => {
  return (
    <S.ModalWrap>
      <S.ModalBack onClick={onClickToggleModal} />
      <S.Modal>
        <ModalHeader onClickToggleModal={onClickToggleModal} />
        <ModalList />
      </S.Modal>
    </S.ModalWrap>
  );
};

export default AdminQnAModal;
