import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory, useParams } from 'react-router-dom';

const PostButtons: FC = () => {
  const paramId = Number(useParams<{ id: string }>().id);
  const history = useHistory();
  return (
    <S.PostFooterWrapper>
      <S.Button
        bgColor='#505BFF'
        fontColor='#FFFFFF'
        onClick={() => history.push(`/board/class/write?id=${paramId}`)}
      >
        수정하기
      </S.Button>
      <S.Button bgColor='#505BFF' fontColor='#FFFFFF'>
        댓글보기
      </S.Button>
      <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={() => history.push('/board/class')}>
        목록으로
      </S.Button>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
