import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { TaskButton, TaskHeader, AssignmentTaskListComponent, ErrorListComponent } from '.';
import { AssignmentType } from 'lib/api/Assignment/Assignment';

interface Props {
  assignmentPreview: AssignmentType | null;
  isLoading: boolean;
}

const isDataAble = (assignmentPreview: AssignmentType, isLoading: boolean) =>
  assignmentPreview && !isLoading ? true : false;

const AssignmentTaskList: FC<Props> = ({ assignmentPreview, isLoading }) => {
  const setAssignmentComponents = useCallback(
    (assignmentPreview: AssignmentType): React.ReactNode => {
      if (!isDataAble(assignmentPreview, isLoading)) return <ErrorListComponent />;
      const buffer = [];
      for (let i: number = 0; i < 3; i++) {
        const assignment = assignmentPreview.boardResponses[i];
        buffer.push(
          <AssignmentTaskListComponent
            date={assignment.createdAt}
            isProgress={assignment.isFinish}
            title={assignment.title}
          />,
        );
      }
      return buffer;
    },
    [assignmentPreview],
  );
  return (
    <div>
      <TaskHeader taskListType='megaphone' />
      <S.TaskList>
        {setAssignmentComponents(assignmentPreview)}
        {isDataAble(assignmentPreview, isLoading) ? (
          <TaskButton link='/board/assignment-guide' />
        ) : (
          ''
        )}
      </S.TaskList>
    </div>
  );
};

export default AssignmentTaskList;