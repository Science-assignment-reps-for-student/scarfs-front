import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory } from 'react-router-dom';

const PostButtons: FC = () => {
  const history = useHistory();
  const goNoticeList = () => history.push('/board/notice');
  return (
    <S.PostFooterWrapper>
      <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={goNoticeList}>
        목록으로
      </S.Button>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
