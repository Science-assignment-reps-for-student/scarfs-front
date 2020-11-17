import React, { FC, useCallback, ChangeEvent } from 'react';
import * as S from './style';
import queryString from 'query-string';
import {
  PostMainWrapper,
  LeftAside,
  PostContentBox,
} from '../../DetailPost/Default/PostMain/style';
import { WriteTextarea, WriteFooterButtons } from './';
import { NoticeWrite, writeBoard } from '../../../../lib/api/NoticeBoardWrite';
import { useHistory } from 'react-router-dom';

interface Props {
  writeTitle: (title: string) => void;
  writeContent: (content: string) => void;
  title: string;
  content: string;
}

const WriteMain: FC<Props> = ({ writeTitle, writeContent, title, content }) => {
  const history = useHistory();
  const { id } = queryString.parse(location.search);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    writeTitle(e.target.value);
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    writeContent(e.target.value);
  };

  const writeClickHandler = useCallback(async () => {
    if (!title.trim()) {
      return alert('제목은 빌 수 없습니다.');
    }
    if (!content.trim()) {
      return alert('내용은 빌 수 없습니다.');
    }

    const data: NoticeWrite = {
      title,
      content,
    };

    try {
      const res = await writeBoard(data);
      const noticeId = res.data;
      history.push(`/board/notice/${noticeId}`);
    } catch (err) {
      if (err) {
        alert(`공지사항 작성에 실패했습니다. error code : ${err?.response?.status}`);
      }
    }
  }, [title, content]);

  return (
    <>
      <PostMainWrapper>
        <LeftAside>
          <S.Box>
            <S.TitleInput type='text' placeholder='제목을 입력하세요.' onChange={handleTitle} />
          </S.Box>
        </LeftAside>
        <PostContentBox>
          <S.ContentWrapper id='write'>
            <WriteTextarea hasPlaceholder={true} setContent={handleContent} />
          </S.ContentWrapper>
        </PostContentBox>
      </PostMainWrapper>
      <WriteFooterButtons
        isEditMode={false}
        writeOrEditClickHandler={writeClickHandler}
        boardId={Number(id)}
      />
    </>
  );
};

export default WriteMain;
