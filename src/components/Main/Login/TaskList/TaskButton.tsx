import React, { FC } from 'react';
import * as S from '../../../../style/Main';

const TaskButton: FC = () => {
  return (
    <S.TaskListComponentAddButton>
      <p>+ 더보기</p>
    </S.TaskListComponentAddButton>
  );
};

export default TaskButton;