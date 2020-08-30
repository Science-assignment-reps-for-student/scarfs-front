import styled, { css } from 'styled-components';

export const PostFooterWrapper = styled.footer`
  width: 100%;
  height: 61px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  > div {
    margin-right: 30px;
    display: flex;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  & + & {
    margin-left: 30px;
  }
`;

interface ButtonProps {
  borderColor?: string;
  borderPx?: string;
  bgColor: string;
  fontColor: string;
}

export const Button = styled.button<ButtonProps>`
  ${({ borderColor }) => (borderColor ? `border: 1.5px solid ${borderColor};` : `border: none;`)}
  ${({ borderPx }) => (borderPx ? `border-width: ${borderPx}px` : '')};
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
`;
