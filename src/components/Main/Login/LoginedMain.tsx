import React, { FC } from 'react';
import Logo from './Logo';
import { BoardTaskList, AssignmentTaskList } from './TaskList';
import UserInfo from './UserInfo';
import * as S from '../style';
import { AssignmentType, BoardType } from '../../../lib/api/Assignment/Assignment';
import { UserInfoType } from '../../../lib/api/Header/userInfo';

interface Props {
  assignmentTask: AssignmentType;
  boardTask: BoardType;
  isBoardLoading: boolean;
  isAssignmentLoading: boolean;
  userInfo: UserInfoType;
  isUserInfoLoading: boolean;
  logout: () => void;
}

const Main: FC<Props> = ({
  assignmentTask,
  boardTask,
  isBoardLoading,
  isAssignmentLoading,
  userInfo,
  isUserInfoLoading,
  logout,
}) => {
  return (
    <S.Body>
      <S.SideBar>
        <p>SCIENCE</p>
      </S.SideBar>
      <S.Wrapper>
        <S.TaskListWrapper>
          <BoardTaskList boardPreview={boardTask} isLoading={isBoardLoading} />
          <AssignmentTaskList assignmentPreview={assignmentTask} isLoading={isAssignmentLoading} />
        </S.TaskListWrapper>
      </S.Wrapper>
      <S.Wrapper margin={20}>
        <Logo />
        <UserInfo userInfo={userInfo} isLoading={isUserInfoLoading} logout={logout} />
      </S.Wrapper>
    </S.Body>
  );
};

export default Main;
