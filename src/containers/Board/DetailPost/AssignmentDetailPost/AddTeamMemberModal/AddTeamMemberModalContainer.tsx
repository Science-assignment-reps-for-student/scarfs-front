import React, { FC } from 'react';
import { AddTeamMemberModal } from '../../../../../components/Board/DetailPost';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import {
  AddTeamMemberStatus,
  resetAddTeamMember as createResetAddTeamMemberAction,
} from '../../../../../modules/reducer/AddTeamMember';
import { LoadingState } from '../../../../../modules/reducer/Loading';
import {
  getStudentsThunk,
  deleteTeamMemberThunk,
} from '../../../../../modules/thunk/AddTeamMember';

const AddTeamMemberModalContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    students,
    getStudentsError,
    deleteTeamMemberSuccess,
    deleteTeamMemberError,
  } = useSelector(getStateCallback<AddTeamMemberStatus>('AddTeamMember'));

  const { 'AddTeamMember/GET_STUDENTS': isLoadingGetStudents } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getStudents = (query: string) => {
    dispatch(getStudentsThunk(query));
  };

  const deleteTeamMember = (member_id: number) => {
    dispatch(deleteTeamMemberThunk(member_id));
  };

  const resetAddTeamMember = () => {
    dispatch(createResetAddTeamMemberAction());
  };

  return (
    <AddTeamMemberModal
      isLoadingGetStudents={isLoadingGetStudents}
      students={students}
      getStudentsError={getStudentsError}
      getStudents={getStudents}
      deleteTeamMemberSuccess={deleteTeamMemberSuccess}
      deleteTeamMemberError={deleteTeamMemberError}
      deleteTeamMember={deleteTeamMember}
      resetAddTeamMember={resetAddTeamMember}
    />
  );
};

export default AddTeamMemberModalContainer;
