import React, { FC } from 'react';
import Logo from './Logo';
import { BoardTaskList, AssignmentTaskList } from './TaskList';
import UserInfo from './UserInfo';
import * as S from '../style';
import { AssignmentType, BoardType, UserInfoType } from 'lib/api/Assignment/Assignment';

interface Props {
  assignmentTask: AssignmentType;
  boardTask: BoardType;
  isBoardLoading: boolean;
  isAssignmentLoading: boolean;
  userInfo: UserInfoType;
  isUserInfoLoading: boolean;
}

const Main: FC<Props> = ({
  assignmentTask,
  boardTask,
  isBoardLoading,
  isAssignmentLoading,
  userInfo,
  isUserInfoLoading,
}) => {
  return (
    <S.Body>
      <S.SideBar>
        <p>SCIENCE</p>
      </S.SideBar>
      <S.Wrapper margin={108}>
        <S.TaskListWrapper>
          <BoardTaskList boardPreview={boardTask} isLoading={isBoardLoading} />
          <AssignmentTaskList assignmentPreview={assignmentTask} isLoading={isAssignmentLoading} />
        </S.TaskListWrapper>
      </S.Wrapper>
      <S.Wrapper margin={106}>
        <Logo />
        <UserInfo userInfo={userInfo} isLoading={isUserInfoLoading} />
      </S.Wrapper>
    </S.Body>
  );
};

export default Main;
