import React, { FC } from 'react';
import * as S from '../../style';

interface Props {
  date: string;
  title: string;
}
const BoardTaskListComponent: FC<Props> = ({ date, title }) => {
  return (
    <S.TaskListComponent>
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
