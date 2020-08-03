import React, { FC } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';

const board = {
  homeworkId: 1,
  type: '팀',
  title: '우주 행성',
  createdAt: '2020.07.08',
  daedLine: '2020.07.13',
  isFinish: true,
  view: 5,
  content: `현재 사용되고 있는 형광등과 그 전에 쓰던 백열전구는 어떤 차이점이 있을까
  이들이 각각 가지고 있는 원리와 특성을 알아보도록 하자
  특히 백열전구가 사람의 몸속에서 깨진다면 안에 있는 질소나 아르곤 가스, 유리조각이 어떠한 영향을 끼치는지 조사해 파일을 제출하고
  이것을 이용한 실험을 진행한다.`,
  preHomeworkNumber: 3,
  nextHomeworkNumber: 5,
  preHomeworkTitle: 'ㅋㅋㄹㅇ 실화냐?',
  nextHomeworkTitle: '사랑해요',
  files: [
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%29.pdf',
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%291.pdf',
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%229.pdf',
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%239.pdf',
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%2549.pdf',
    'http://blogattach.naver.net/5fca43f3e1b9bb6748a4c9f5c1235e258ddf2dc388/20140126_99_blogfile/sje0951_1390734158687_D4pCOX_pdf/Let%2BIt%2BGo%2B%28Piano%2965.pdf',
  ],
};

const AssignmentDetailPost: FC = () => {
  const paramId = Number(useParams<{ id: string }>().id);
  if (isNaN(paramId) || paramId < 0) return <Redirect to='/error' />;
  return (
    <>
      <PostHeader title='과제안내' />
      <PostMain
        title={board.title}
        type={board.type}
        prevPostNumber={board.preHomeworkNumber}
        nextPostNumber={board.nextHomeworkNumber}
        prevPostTitle={board.preHomeworkTitle}
        nextPostTitle={board.nextHomeworkTitle}
        content={board.content}
        board={board}
        InfoDetailTemplate={PostInfoDetail}
      />
      <PostFooter type={board.type} ButtonsTemplate={PostButtons} />
    </>
  );
};

export default AssignmentDetailPost;
