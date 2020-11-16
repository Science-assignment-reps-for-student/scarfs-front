import React, { FC, useCallback, useEffect, useState } from 'react';
import { NoticeBoardWrite } from '../../../../components';
import { useSelector } from 'react-redux';
import { getStateCallback } from '../../../../lib/function';
import { LoadingState } from '../../../../modules/reducer/Loading';
import { HeaderState } from '../../../../modules/reducer/Header';
import { useHistory } from 'react-router-dom';

const NoticeBoardWriteContainer: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const history = useHistory();
  const { 'Header/GET_USER_INFO': getUserLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );
  const { userInfo } = useSelector(getStateCallback<HeaderState>('Header'));

  const writeTitle = useCallback(
    (title: string) => {
      setTitle(title);
    },
    [title],
  );

  const writeContent = useCallback(
    (content: string) => {
      setContent(content);
    },
    [content],
  );

  useEffect(() => {
    if (!getUserLoading && userInfo && userInfo.type === 'STUDENT') {
      history.goBack();
      alert('학생은 글쓰기 페이지에 접근할 수 없습니다.');
    }
  }, [userInfo, getUserLoading]);

  return (
    <NoticeBoardWrite
      writeTitle={writeTitle}
      writeContent={writeContent}
      title={title}
      content={content}
    />
  );
};

export default NoticeBoardWriteContainer;
