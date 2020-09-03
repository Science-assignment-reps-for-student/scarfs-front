import React, { FC } from 'react';
import {
  PostHeaderWrapper,
  Title,
  CurrentLocation,
  Bold,
} from '../../DetailPost/Default/PostHeader/style';

interface Props {
  title: string;
  children?: React.ReactElement;
}

const Header: FC<Props> = ({ title, children }) => {
  return (
    <PostHeaderWrapper>
      <Title>{title}</Title>
      <CurrentLocation>
        {children}
        HOME {'>'} <Bold>게시판</Bold>
      </CurrentLocation>
    </PostHeaderWrapper>
  );
};

export default Header;
