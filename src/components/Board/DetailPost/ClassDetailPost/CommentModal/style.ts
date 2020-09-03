import styled from 'styled-components';

export const CommentModalBox = styled.main`
  width: 1125px;
  height: 640px;
  background-color: #ffffff;
  padding: 28px 140px 0 215px;
  border; 1px solid #D3D3D3;
  box-sizing:border-box;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    height: 180px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #2C2C2C;
    border-radius: 0;
  }
`;

export const CommentInputBox = styled.div`
  height: 160px;
`;

export const Title = styled.p`
  font-size: 15px;
  line-height: 15px;
  color: #1d1d1d;
  font-weight: 500;
`;

export const Textarea = styled.textarea`
  margin: 16px 0 8px;
  font-size: 13px;
  width: 100%;
  height: 75px;
  padding: 8px 10px 0;
  border: 1px solid #d3d3d3;
  border-top: 1.5px solid #1d1d1d;
  border-radius: 0;
  box-sizing: border-box;
  outline: none;
  resize: none;
  &:placeholder {
    color: #979797;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 180px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #2c2c2c;
    border-radius: 0;
  }
`;

export const Button = styled.button<{
  blue?: boolean;
}>`
  float: right;
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-size: 13px;
  background-color: #${({ blue }) => (blue ? '505BFF' : '1d1d1d')};
  border: none;
  border-radius: 0;
  outline: none;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
`;

export const CommentListBox = styled.div`
  margin-top: 10px;
`;

export const CommentItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #979797;
  padding: 14px 0 16px;
  &:last-child {
    border-bottom: 1px solid #979797;
    margin-bottom: 10px;
  }
`;

export const WriterText = styled.p`
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
  color: #505bff;
  & + & {
    margin-left: 4px;
  }
`;

export const AdminText = styled.p`
  display: inline-block;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
  color: #ff5700;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > div:last-child {
    display: inline-block;
    > p {
      &:first-child,
      &:last-child {
        cursor: pointer;
      }
    }
  }
`;

export const GrayText = styled.p`
  display: inline-block;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #979797;
  margin-left: 10px;
  & + & {
    margin-left: 6px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.pre`
  white-space: pre-wrap;
  font-size: 13px;
  font-weight: 400;
  color: #1d1d1d;
  margin: 8px 0 14px;
`;

export const CommentEditBox = styled.div`
  width: 100%;
  > div {
    margin-top: 10px;
    > button:first-child {
      margin-left: 10px;
    }
  }
`;

export const ReCommentButton = styled.p`
  display: inline-block;
  width: 45px;
  font-size: 12px;
  line-height: 12px;
  color: #1d1d1d;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;

export const ReCommentInputBox = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const ReCommentInput = styled.input<{
  widthFull?: boolean;
}>`
  width: ${({ widthFull }) => (widthFull ? '100%' : '300px')};
  height: 40px;
  border: 1px solid #d3d3d3;
  font-size: 13px;
  &::placeholder {
    color: #979797;
  }
  border-radius: 0;
  outline: none;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
`;

export const ReCommentBox = styled.div`
  position: relative;
  margin-top: 10px;
  padding-left: 25px;
  > main > pre {
    margin: 0;
  }
`;

export const ReCommentPointer = styled.div`
  position: absolute;
  top: 0;
  left: -1px;
  width: 13px;
  height: 13px;
  border-left: 1px solid #464646;
  border-bottom: 1px solid #464646;
`;
