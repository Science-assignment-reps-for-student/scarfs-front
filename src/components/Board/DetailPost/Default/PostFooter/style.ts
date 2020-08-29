import styled, { css } from 'styled-components';

export const PostFooterWrapper = styled.footer`
  width: 100%;
  height: 61px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonBox = styled.div`
  display: flex;
  & + & {
    margin-left: 30px;
  }
`;

export const Button = styled.div<{
  borderColor?: string;
  bgColor: string;
  fontColor: string;
}>`
  ${({ borderColor }) =>
    borderColor
      ? css`
          padding: 12px 0 10px;
          border: 1px solid ${borderColor};
        `
      : css`
          padding: 14px 0 10px;
          border: none;
        `}
  text-align: center;
  font-size: 13px;
  line-height: 13px;
  color: ${({ fontColor }) => fontColor};
  border-radius: 0;
  box-sizing: border-box;
  background-color: ${({ bgColor }) => bgColor};
  width: 117px;
  height: 41px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  & + & {
    margin-left: 15px;
  }
  &:nth-child(2) {
    margin-right: 20px;
  }
`;
