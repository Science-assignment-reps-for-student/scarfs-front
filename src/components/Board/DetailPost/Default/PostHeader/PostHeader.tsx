import React, { FC } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
}

const PostHeader: FC<Props> = ({ title, to }) => {
  const history = useHistory();

  return (
    <S.PostHeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.CurrentLocation>
        <span onClick={() => history.push('/')}>HOME</span> {'>'}{' '}
        <S.Bold onClick={() => history.push(to)}>{title}</S.Bold>
      </S.CurrentLocation>
    </S.PostHeaderWrapper>
  );
};

export default PostHeader;
