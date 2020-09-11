import React, { FC } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';

const CreateTeamModal: FC = () => {
  return (
    <Modal>
      <S.CreateTeamModalBox>
        <S.InputTeamName placeholder='팀 이름을 적어주세요.' />
        <S.CreateButton>생성</S.CreateButton>
      </S.CreateTeamModalBox>
    </Modal>
  );
};

export default CreateTeamModal;
