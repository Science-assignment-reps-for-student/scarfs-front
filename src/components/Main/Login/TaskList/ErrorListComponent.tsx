import React, { FC } from 'react';
import { TaskListComponent } from '.';

const ErrorListComponent: FC = () => {
  const errorText =
    '네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요네트워크를 확인해 주세요';
  return (
    <>
      <TaskListComponent
        date={errorText}
        isProgress={false}
        title={errorText}
        isNotice={false}
        noticeId={null}
      />
      <TaskListComponent
        date={errorText}
        isProgress={false}
        title={errorText}
        isNotice={false}
        noticeId={null}
      />
      <TaskListComponent
        date={errorText}
        isProgress={false}
        title={errorText}
        isNotice={false}
        noticeId={null}
      />
    </>
  );
};

export default ErrorListComponent;
