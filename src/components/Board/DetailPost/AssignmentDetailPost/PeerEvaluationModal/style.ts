import styled from 'styled-components';
import { EditImage, ViewImage } from '../../../../../assets/Board/DetailPost';

export const PeerEvaluationModalBox = styled.div`
  width: 286px;
  height: 350px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 16px;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  line-height: 13px;
  color: #1d1d1d;
  padding: 7px 0 8px 20px;
  border-bottom: 1px solid #1d1d1d;
  box-sizing: border-box;
`;

export const StudentBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 34px;
  padding: 7px 10px 7px 20px;
  box-sizing: border-box;
  & + & {
    border-top: 0.5px solid #979797;s
  }
`;

export const StudentInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const EvaluationStatusBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 13px;
  line-height: 12px;
  display: inline-block;
  height: 12px;
  & + & {
    margin-left: 10px;
  }
`;

export const OrangeText = styled(Text)`
  color: #ff5700;
`;

export const BlueText = styled(Text)`
  color: #505bff;
`;

export const Button = styled.img`
  width: 10px;
  height: 10px;
  object-fit: contain;
  margin-left: 5px;
  cursor: pointer;
`;

export const EditButton = styled(Button).attrs({
  src: EditImage,
})``;

export const ViewButton = styled(Button).attrs({
  src: ViewImage,
})``;

export const AllEvaluateButton = styled.button`
  width: 100%;
  height: 34px;
  color: #ffffff;
  background-color: #000000;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 0;
`;
