import React, { FC, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../../style';

interface Props {
  date: string;
  isProgress: boolean;
  title: string;
  isNotice: boolean;
  noticeId: number | null;
}
const TaskListComponent: FC<Props> = ({ date, isProgress, title, isNotice, noticeId }) => {
  const history = useHistory();
  const componentClickHandler = useCallback(() => {
    if (typeof noticeId === 'object') return;
    if (isNotice) history.push(`/board/class/${noticeId}`);
    else history.push(`/board/assignment-guide/${noticeId}`);
  }, []);
  return (
    <S.TaskListComponent onClick={componentClickHandler}>
      <S.TaskListComponentHeader>
        <p>{date}</p>
        <p className='point'>{isProgress ? '진행' : '완료'}</p>
      </S.TaskListComponentHeader>
      <S.TaskListComponentBody>
        <p>{title}</p>
      </S.TaskListComponentBody>
    </S.TaskListComponent>
  );
};

export default TaskListComponent;
