import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import * as S from '../Default/PostFooter/style';
import { deleteNoticeDetailPost } from '../../../../lib/api/NoticeDetailPost';
import { useUser } from '../../../../lib/function';

const PostButtons: FC = () => {
  const history = useHistory();
  const param = useParams<{ id: string }>();
  const { type } = useUser();

  const goNoticeList = () => history.push('/board/notice');

  const onClickDelete = async () => {
    if (confirm('게시글을 정말 삭제하시겠습니까?')) {
      try {
        deleteNoticeDetailPost(param.id);
        history.push(`/board/notice`);
      } catch (err) {
        if (err) {
          alert(`공지사항 삭제에 실패했습니다. error code : ${err?.response?.status}`);
        }
      }
    }
  };

  return (
    <S.PostFooterWrapper>
      {type === 'ADMIN' && (
        <S.Button bgColor='#FF5700' fontColor='#FFFFFF' onClick={onClickDelete}>
          삭제하기
        </S.Button>
      )}
      <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={goNoticeList}>
        목록으로
      </S.Button>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
