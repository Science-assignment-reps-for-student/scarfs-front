import styled from 'styled-components';

export const Box = styled.main`
  width: 410px;
  box-sizing: border-box;
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ImageUploadButton = styled.label`
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 77px;
  font-size: 13px;
  color: #464646;
  border: none;
  border-top: 1px solid #979797;
  box-sizing: border-box;
  background-color: #e5e1de;
  border-bottom: 1px solid #979797;
  outline: none;
  border-radius: 0;
  padding: 28px;
`;

export const TitleInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  font-weight: 300;
  color: #1d1d1d;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: #f6f6f6;
  margin-left: 2px;
`;

export const InvisibleInput = styled.input`
  width: 0;
  height: 0;
  border: none;
  display: none;
`;

export const ContentWrapper = styled.div`
  max-height: 100%;
  font-size: 13px;
  color: #1d1d1d;
  border: none;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    background: #3f51b5;
    border-radius: 16px;
  }
`;

export const ImagePreviewBox = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
  width: 500px;
  height: 250px;
  > img {
    width: 100%;
    height: 100%;
  }
  > button {
    cursor: pointer;
    width: 60px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    margin: 6px;
    padding: 0;
    background-color: #5a4b25;
    font-size: 13px;
    color: #ffffff;
    border: none;
    border-radius: 0;
    outline: none;
  }
`;

export const TextareaBox = styled.div`
  > textarea {
    resize: none;
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-size: 13px;
    color: #1d1d1d;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0;
    }
    ::-webkit-scrollbar-thumb {
      background: none;
    }
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  > button + button {
    margin-left: 15px;
  }
`;

export const Button = styled.button`
  width: 117px;
  height: 41px;
  padding: 0;
  font-size: 13px;
  color: #ffffff;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
`;

export const BlueButton = styled(Button)`
  background-color: #505bff;
`;

export const BlackButton = styled(Button)`
  background-color: #1d1d1d;
`;

interface ButtonProps {
  borderColor?: string;
  borderPx?: string;
  bgColor: string;
  fontColor: string;
}

export const DeleteButton = styled.button<ButtonProps>`
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
  outline: none;
  & + & {
    margin-left: 15px;
  }
`;
