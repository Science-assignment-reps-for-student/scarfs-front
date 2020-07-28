import React, { FC } from 'react';
import * as S from './style';

interface Props {
  title: string;
}
const PostHeader: FC<Props> = ({ title }) => {
  return (
    <S.PostHeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.CurrentLocation>
        HOME {'>'} <S.Bold>{title}</S.Bold>
      </S.CurrentLocation>
    </S.PostHeaderWrapper>
  );
};

export default PostHeader;
