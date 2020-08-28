import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../style';
interface Props {
  date: string;
  isProgress: boolean;
  title: string;
  id: number;
}
const AssignmentTaskListComponent: FC<Props> = ({ date, isProgress, title, id }) => {
  const history = useHistory();
  return (
    <S.TaskListComponent onClick={() => history.push(`/assignment/${id}`)}>
      <S.TaskListComponentHeader>
        <p>{date}</p>
        <p className='point'>{!isProgress ? '진행' : '완료'}</p>
      </S.TaskListComponentHeader>
      <S.TaskListComponentBody>
        <p>{title}</p>
      </S.TaskListComponentBody>
    </S.TaskListComponent>
  );
};

export default AssignmentTaskListComponent;
