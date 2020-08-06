import React, { FC } from 'react';
import {
  PostHeaderWrapper,
  Title,
  CurrentLocation,
  Bold,
} from '../../DetailPost/Default/PostHeader/style';

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <PostHeaderWrapper>
      <Title>{title}</Title>
      <CurrentLocation>
        HOME {'>'} <Bold>게시판</Bold>
      </CurrentLocation>
    </PostHeaderWrapper>
  );
};

export default Header;
