import React, { FC } from 'react';
import * as S from './style';

interface Buttons {
  type?: string;
}

interface Props {
  type?: string;
  ButtonsTemplate: FC<Buttons>;
}

const PostFooter: FC<Props> = ({ type, ButtonsTemplate }) => {
  return (
    <S.PostFooterWrapper>
      <ButtonsTemplate type={type} />
    </S.PostFooterWrapper>
  );
};

export default PostFooter;
