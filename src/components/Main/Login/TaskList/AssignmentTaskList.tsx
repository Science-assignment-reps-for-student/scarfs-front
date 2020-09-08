import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { TaskButton, TaskHeader, AssignmentTaskListComponent, ErrorListComponent } from '.';
import { AssignmentType } from 'lib/api/Assignment/Assignment';

interface Props {
  assignmentPreview: AssignmentType | null;
  isLoading: boolean;
}

const AssignmentTaskList: FC<Props> = ({ assignmentPreview, isLoading }) => {
  const isDataAble = useCallback(
    (assignmentPreview: AssignmentType, isLoading: boolean) =>
      assignmentPreview && assignmentPreview.applicationResponses && !isLoading ? true : false,
    [],
  );
  const setAssignmentComponents = useCallback(
    (assignmentPreview: AssignmentType): React.ReactNode => {
      if (!isDataAble(assignmentPreview, isLoading)) return <ErrorListComponent />;
      const buffer = [];
      assignmentPreview.applicationResponses.map(assignment => {
        buffer.push(
          <AssignmentTaskListComponent
            date={assignment.created_at}
            isProgress={assignment.complete}
            title={assignment.title}
            id={assignment.assignment_id}
            key={'assignmet' + assignment.assignment_id}
          />,
        );
      });
      return buffer;
    },
    [],
  );
  return (
    <div>
      <TaskHeader taskListType='calender' />
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
