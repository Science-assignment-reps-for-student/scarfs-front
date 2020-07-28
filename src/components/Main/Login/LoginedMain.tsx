import React, { FC } from 'react';
import Logo from './Logo';
import TaskList from './TaskList';
import UserInfo from './UserInfo';
import * as S from '../style';
import { getAssignment, getBoard } from '../../../modules/reducer/Main';

const Main: FC = () => {
  return (
    <S.Body>
      <S.SideBar>
        <p>SCIENCE</p>
      </S.SideBar>
      <S.Wrapper margin={108}>
        <S.TaskListWrapper>
          <TaskList taskListType='calender' isNotice={false} getTask={getAssignment} />
          <TaskList taskListType='megaphone' isNotice={true} getTask={getBoard} />
        </S.TaskListWrapper>
      </S.Wrapper>
      <S.Wrapper margin={106}>
        <Logo />
        <UserInfo />
      </S.Wrapper>
    </S.Body>
  );
};

export default Main;
