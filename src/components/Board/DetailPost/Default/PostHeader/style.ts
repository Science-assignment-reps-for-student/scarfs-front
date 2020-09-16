import styled from 'styled-components';

export const PostHeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 31px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;

export const CurrentLocation = styled.div`
  font-size: 14px;
  > span {
    cursor: pointer;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;
