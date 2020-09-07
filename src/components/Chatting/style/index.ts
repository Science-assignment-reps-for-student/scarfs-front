import styled from 'styled-components';
import { alarmChatting, chatting, send, trash } from '../../../assets/Main';
import { deleteIcon } from '../../../assets/Modal';

export const ChattingOpenButton = styled.div<{ alarm: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 40px;
  border-radius: 50%;
  width: 55px;
  z-index: 5;
  height: 55px;
  background-image: url(${props => (props.alarm ? alarmChatting : chatting)});
`;

export const ChattingWrapper = styled.div`
  height: 600px;
  width: 320px;
  position: fixed;
  bottom: 50px;
  right: 40px;
  z-index: 5;
  box-shadow: 0px 0px 5px 0px gray;
  border-radius: 10px;
  background-color: white;
`;

export const ChattingBody = styled.div`
  height: 500px;
  width: 320px;
  border-radius: 10px;
  overflow: scroll;
  position: relative;
  > div.body {
    padding-top: 30px;
    box-sizing: border-box;
    width: 100%;
  }
`;

export const ChattingHeaderContent = styled.div<{ isSelected: boolean }>`
  width: 160px;
  height: 35px;
  background-color: ${props => (props.isSelected ? 'white' : '#F2F2F2')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChattingHeader = styled.div`
  width: 320px;
  height: 51px;
  background-color: black;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: flex-end;
  position: relative;
  cursor: pointer;
`;

export const ChattingDeleteButton = styled.div`
  width: 8px;
  height: 8px;
  background-image: url(${deleteIcon});
  display: block;
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const ChattingInputDiv = styled.div`
  width: 320px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChattingInput = styled.div`
  border: none;
  border-radius: 13px;
  background-color: #f2f2f2;
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  > input {
    width: 270px;
    height: 28px;
    border: none;
    background-color: #f2f2f2;
    border-radius: 13px;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
  }
`;

export const ChattingSendButton = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${send});
  cursor: pointer;
`;

export const MyChattingLog = styled.div<{ isHover: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > div {
    display: flex;
    align-items: center;

    > div.text {
      background-color: #578fff;
      color: white;
      max-width: 160px;
      padding: 7px;
      width: auto;
      word-break: break-all;
      display: inline-block;
      margin-right: 7px;
      margin-left: 0px;
      cursor: pointer;
    }
    > .img {
      width: 11px;
      height: 13px;
      background-image: url(${trash});
      background-repeat: no-repeat;
      margin-right: 5px;
      display: ${props => (props.isHover ? 'block' : 'none')};
    }
  }
`;

export const YourChattingLog = styled(MyChattingLog)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  > div {
    > div.text {
      background-color: #f2f2f2;
      margin-right: 0px;
      margin-left: 7px;
      color: black;
    }
  }
`;

export const DeleteAlertBackground = styled.div`
  color: black;
  position: fixed;
  transform: translate(60px, 180px);
`;

export const DeleteAlertBody = styled.div`
  width: 200px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 2px 2px 1px 1px #d3d3d3;
`;

export const DeleteAlertText = styled.div`
  font-size: 13px;
  text-align: center;
`;

export const DeleteAlertButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteAlertButton = styled.p<{ isApproveButton: boolean }>`
  color: ${props => (props.isApproveButton ? '#FF5700' : '#464646')};
  font-size: 13px;
  margin: 20px;
  cursor: pointer;
`;
