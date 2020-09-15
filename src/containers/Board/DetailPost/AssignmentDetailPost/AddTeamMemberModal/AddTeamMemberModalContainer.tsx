import React, { FC } from 'react';
import { AddTeamMemberModal } from '../../../../../components/Board/DetailPost';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import {
  AddTeamMemberStatus,
  resetAddTeamMember as createResetAddTeamMemberAction,
  setAddTeamMemberStudentNo as createSetaAddTeamMemberStudentNoAction,
  setIsLastAddTeamMember as createSetIsLastAddTeamMemberAction,
} from '../../../../../modules/reducer/AddTeamMember';
import { LoadingState } from '../../../../../modules/reducer/Loading';
import {
  getStudentsThunk,
  deleteTeamMemberThunk,
  addTeamMemberThunk,
} from '../../../../../modules/thunk/AddTeamMember';

const AddTeamMemberModalContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    students,
    getStudentsError,
    deleteTeamMemberSuccess,
    deleteTeamMemberError,
    addTeamMemberSuccess,
    addTeamMemberError,
    addTeamMemberStudentNo,
    isLastAddTeamMember,
  } = useSelector(getStateCallback<AddTeamMemberStatus>('AddTeamMember'));

  const { 'AddTeamMember/GET_STUDENTS': isLoadingGetStudents } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getStudents = (query: string, assignment_id: number) => {
    dispatch(getStudentsThunk({ query, assignment_id }));
  };

  const deleteTeamMember = (member_id: number) => {
    dispatch(deleteTeamMemberThunk(member_id));
  };

  const addTeamMember = (team_id: number, target_id: number) => {
    dispatch(addTeamMemberThunk({ team_id, target_id }));
  };

  const setAddTeamMemberStudentNo = (studentNo: string) => {
    dispatch(createSetaAddTeamMemberStudentNoAction(studentNo));
  };

  const setIsLastAddTeamMember = () => {
    dispatch(createSetIsLastAddTeamMemberAction());
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
      addTeamMemberSuccess={addTeamMemberSuccess}
      addTeamMemberError={addTeamMemberError}
      addTeamMember={addTeamMember}
      addTeamMemberStudentNo={addTeamMemberStudentNo}
      setAddTeamMemberStudentNo={setAddTeamMemberStudentNo}
      isLastAddTeamMember={isLastAddTeamMember}
      setIsLastAddTeamMember={setIsLastAddTeamMember}
      resetAddTeamMember={resetAddTeamMember}
    />
  );
};

export default AddTeamMemberModalContainer;
