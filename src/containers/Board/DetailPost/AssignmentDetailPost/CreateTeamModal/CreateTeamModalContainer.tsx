import React, { FC } from 'react';
import { CreateTeamModal } from '../../../../../components/Board/DetailPost';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import {
  CreateTeamState,
  resetCreateTeamState as createResetCreateTeamStateAction,
} from '../../../../../modules/reducer/CreateTeam';
import { createTeamThunk } from '../../../../../modules/thunk/CreateTeam';

const CreateTeamModalContainer: FC = () => {
  const dispatch = useDispatch();
  const { createTeamSuccess, createTeamError } = useSelector(
    getStateCallback<CreateTeamState>('CreateTeam'),
  );

  const createTeam = (assignment_id: number, team_name: string) => {
    dispatch(createTeamThunk({ assignment_id, team_name }));
  };

  const resetCreateTeamState = () => {
    dispatch(createResetCreateTeamStateAction());
  };

  return (
    <CreateTeamModal
      createTeam={createTeam}
      createTeamSuccess={createTeamSuccess}
      createTeamError={createTeamError}
      resetCreateTeamState={resetCreateTeamState}
    />
  );
};

export default CreateTeamModalContainer;
