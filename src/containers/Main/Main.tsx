import React, { FC } from 'react';
import { TaskList } from '../../components/Main';
import * as S from '../../style/Main';

const Main: FC = () => {
  return (
    <S.Body>
      <TaskList taskListType="calender" />
      <TaskList taskListType="megaphone" />
    </S.Body>
  );
};

export default Main;
