import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';

const PostButtons: FC = () => {
  return (
    <S.PostFooterWrapper>
      <S.Button bgColor='#505BFF' fontColor='#FFFFFF'>
        댓글보기
      </S.Button>
      <S.Button bgColor='#000000' fontColor='#FFFFFF'>
        목록으로
      </S.Button>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
