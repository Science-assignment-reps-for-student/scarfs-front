import React, { FC } from 'react';
import * as S from './style';

interface Props {
  type?: string;
  ButtonsTemplate: FC<{ type?: string }>;
}

const PostFooter: FC<Props> = ({ type, ButtonsTemplate }) => {
  return (
    <S.PostFooterWrapper>
      <ButtonsTemplate type={type} />
    </S.PostFooterWrapper>
  );
};

export default PostFooter;
