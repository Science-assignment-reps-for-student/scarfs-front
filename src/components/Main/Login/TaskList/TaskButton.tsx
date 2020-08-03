import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../../style';

interface Props {
  link: string;
}

const TaskButton: FC<Props> = ({ link }) => {
  return (
    <Link to={link}>
      <S.TaskListComponentAddButton>
        <p>+ 더보기</p>
      </S.TaskListComponentAddButton>
    </Link>
  );
};

export default TaskButton;
