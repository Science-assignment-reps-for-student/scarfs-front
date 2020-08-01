import styled from 'styled-components';

export const PaginationBarWrapper = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 21px;
`;

export const PageBlock = styled.div`
  height: 27px;
  display: flex;
  margin: 0 20px;
`;

export const PageControllButton = styled.button`
  width: 27px;
  height: 27px;
  border: 1px solid #d3d3d3;
  border-radius: 0;
  color: #979797;
  outline: none;
  cursor: pointer;
  font-size: 10px;
  background-color: #ffffff;
`;

export const PageButton = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 0;
  width: 27px;
  height: 27px;
  outline: none;
  cursor: pointer;
  background-color: #ffffff;
  & + & {
    margin-left: 5px;
  }
  &.active {
    background-color: #1d1d1d;
    color: #ffffff;
  }
`;
