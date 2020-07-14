import React, { FC } from 'react';
import Logo from './Logo';
import TaskList from './TaskList';
import UserInfo from './UserInfo';
import * as S from '../style';

const Main: FC = () => {
  return (
    <>
      <S.Background />
      <S.Body>
        <S.SideBar>
          <p>SCIENCE</p>
        </S.SideBar>
        <S.Wrapper margin={108}>
          <S.TaskListWrapper>
            <TaskList taskListType="calender" isNotice={false} />
            <TaskList taskListType="megaphone" isNotice={true} />
          </S.TaskListWrapper>
        </S.Wrapper>
        <S.Wrapper margin={106}>
          <Logo />
          <UserInfo />
        </S.Wrapper>
      </S.Body>
    </>
  );
};

export default Main;
