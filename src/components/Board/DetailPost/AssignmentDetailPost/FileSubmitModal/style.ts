import styled from 'styled-components';
import { PlusImage, DeleteImage } from '../../../../../assets/Board/DetailPost';

export const FileSubmitModalBox = styled.div`
  width: 320px;
  padding: 5px;
`;

interface FileDragBoxProps {
  backgroundColor: string;
}

export const FileDragBox = styled.div<FileDragBoxProps>`
  text-align: center;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  width: 100%;
  height: 195px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const FilePlusButton = styled.img.attrs({
  src: PlusImage,
  draggable: false,
})`
  user-select: none;
  cursor: pointer;
  width: 25px;
  height: 25px;
  object-fit: cover;
  margin: 72px 0 8px;
`;

export const ExplainText = styled.p`
  font-size: 13px;
  line-height: 13px;
  color: #979797;
  user-select: none;
`;

export const Label = styled.p`
  margin: 13px 0 7px 6px;
  font-size: 13px;
  line-height: 13px;
  color: #1d1d1d;
`;

export const FileListBox = styled.div`
  margin: 0 0 25px 5px;
  border-top: 1px solid #1d1d1d;
  max-height: 57px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #3f51b5;
    border-radius: 16px;
  }
`;

export const FileItem = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  box-sizing: border-box;
  height: 28px;
  & + & {
    border-top: 0.5px solid #979797;
  }
`;

export const FileName = styled.a.attrs({
  draggable: false,
})`
  width: 278px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 12px;
  margin-left: 10px;
  color: #505bff;
  white-space: pre;
  user-select: none;
  &::-webkit-scrollbar {
    width: 2px;
    height: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #3f51b5;
    border-radius: 16px;
  }
`;

export const DeleteButton = styled.img.attrs({
  src: DeleteImage,
  draggable: false,
})`
  user-select: none;
  width: 8px;
  height: 8px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 10px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 37px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 117px;
  height: 34px;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  font-size: 13px;
  outline: none;
`;

export const SubmitButton = styled(Button)`
  color: #ffffff;
  background-color: #1d1d1d;
`;

export const CancleButton = styled(Button)`
  border: 1px solid #1d1d1d;
  color: #1d1d1d;
  background-color: #ffffff;
`;
