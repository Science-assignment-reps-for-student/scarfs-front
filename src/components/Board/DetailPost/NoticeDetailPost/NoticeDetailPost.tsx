import React, { FC } from 'react';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { useParams, Redirect } from 'react-router-dom';

const board = {
  title: '잘가',
  createdAt: '2020.07.08',
  view: 5,
  content:
    '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
  nextNoticeTitle: 'ㅋㅋ루삥뽕',
  preNoticeTitle: '사랑합니다!',
  preNoticeNumber: 1,
  nextNoticeNumber: 3,
};

const NoticeDetailPost: FC = () => {
  const paramId = Number(useParams<{ id: string }>().id);
  if (isNaN(paramId) || paramId < 0) return <Redirect to='/error' />;
  return (
    <>
      <PostHeader title='공지사항' />
      <PostMain
        title={board.title}
        prevPostNumber={board.preNoticeNumber}
        nextPostNumber={board.nextNoticeNumber}
        prevPostTitle={board.preNoticeTitle}
        nextPostTitle={board.nextNoticeTitle}
        content={board.content}
        board={board}
        InfoDetailTemplate={PostInfoDetail}
      />
      <PostFooter ButtonsTemplate={PostButtons} />
    </>
  );
};

export default NoticeDetailPost;
