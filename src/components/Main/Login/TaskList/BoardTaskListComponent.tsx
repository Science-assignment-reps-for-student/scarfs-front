import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../style';

interface Props {
  date: string;
  title: string;
  id: number;
}

const BoardTaskListComponent: FC<Props> = ({ date, title, id }) => {
  const history = useHistory();
  return (
    <S.TaskListComponent onClick={() => history.push(`/notice/${id}`)}>
      <S.TaskListComponentHeader>
        <p>{date}</p>
        <p className='point'>공지</p>
      </S.TaskListComponentHeader>
      <S.TaskListComponentBody>
        <p>{title}</p>
      </S.TaskListComponentBody>
    </S.TaskListComponent>
  );
};

export default BoardTaskListComponent;
