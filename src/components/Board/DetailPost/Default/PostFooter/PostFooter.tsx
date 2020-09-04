import React, { FC } from 'react';
import * as S from './style';

interface Buttons {
  type?: string;
  deleteDetailPost?: (boardId: number) => void;
}

interface Props extends Buttons {
  ButtonsTemplate: FC<Buttons>;
}

const PostFooter: FC<Props> = ({ type, ButtonsTemplate, deleteDetailPost }) => {
  return (
    <S.PostFooterWrapper>
      <ButtonsTemplate type={type} deleteDetailPost={deleteDetailPost} />
    </S.PostFooterWrapper>
  );
};

export default PostFooter;
