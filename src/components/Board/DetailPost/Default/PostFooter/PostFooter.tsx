import React, { FC } from 'react';
import * as S from './style';

interface Buttons {
  type?: string;
  isMine?: boolean;
}

interface Props {
  type?: string;
  isMine?: boolean;
  ButtonsTemplate: FC<Buttons>;
}

const PostFooter: FC<Props> = ({ type, isMine, ButtonsTemplate }) => {
  return (
    <S.PostFooterWrapper>
      <ButtonsTemplate type={type} isMine={isMine} />
    </S.PostFooterWrapper>
  );
};

export default PostFooter;
