import React, { FC, useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';
import { ErrorType } from '../../../../../lib/type';
import { stateChange, useTeam } from '../../../../../lib/function';
import { reset } from '../../../../../modules/reducer/Modal';

interface Props {
  createTeam: (assignment_id: number, team_name: string) => void;
  createTeamSuccess: boolean;
  createTeamError: ErrorType;
  resetCreateTeamState: () => void;
}

const CreateTeamModal: FC<Props> = ({
  createTeam,
  createTeamSuccess,
  createTeamError,
  resetCreateTeamState,
}) => {
  const [teamName, setTeamName] = useState<string>('');
  const [, , getTeam] = useTeam();
  const assignmentId = parseInt(location.pathname.split('/')[3]);
  const closeModal = stateChange(reset);

  const onChangeTeamName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const onClickCreateTeam = useCallback(() => {
    if (!teamName.trim()) {
      alert('팀명은 빈칸일 수 없습니다.');
    } else {
      createTeam(assignmentId, teamName);
    }
  }, [assignmentId, teamName]);

  useEffect(() => {
    return () => {
      resetCreateTeamState();
    };
  }, []);

  useEffect(() => {
    if (createTeamSuccess) {
      getTeam(assignmentId);
      closeModal();
    }
  }, [createTeamSuccess]);

  useEffect(() => {
    if (createTeamError.status) {
      alert(`Error code: ${createTeamError.status} 팀 생성 실패!`);
    }
  }, [createTeamError]);

  return (
    <Modal>
      <S.CreateTeamModalBox>
        <S.InputTeamName
          placeholder='팀 이름을 적어주세요.'
          value={teamName}
          onChange={onChangeTeamName}
        />
        <S.CreateButton onClick={onClickCreateTeam}>생성</S.CreateButton>
      </S.CreateTeamModalBox>
    </Modal>
  );
};

export default CreateTeamModal;
