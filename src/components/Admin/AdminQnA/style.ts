import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminQnAWrap = styled.main`
  min-height: calc(100vh - 247.6px);
  padding: 100px 0;
  background-color: #f5f5f5;
`;

export const QnACenter = styled.section`
  width: 70%;
  margin: 0 auto;
`;

export const QnAHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const QnAHeaderSearchWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

export const QnAHeaderSearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 8px;
  border: 1px solid #979797;
  background-color: white;
  box-sizing: border-box;
`;

export const QnAHeaderSearchInput = styled.input`
  margin-left: 8px;
  padding: 0;
  border: 0;
  box-sizing: border-box;
`;

export const OnAHeaderSearchImg = styled.img`
  cursor: pointer;
`;

export const QnAHeaderSearchButton = styled.button`
  height: 100%;
  margin-left: 12px;
  padding: 4px 16px;
  border: 0;
  color: white;
  background-color: #505bff;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;
`;

export const QnATableWrap = styled.div`
  border-top: 2px solid #858585;
  background-color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 20%);
`;

export const QnATable = styled.ul``;

export const QnARowCommon = `
  position: relative;
  border: 1px solid #858585;
  border-right: 0;
  border-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export const QnARowHead = styled.div`
  ${QnARowCommon}
`;

export const QnARow = styled(Link)`
  ${QnARowCommon}
  cursor: pointer;
  &:first-child {
    font-weight: bold;
  }
  &.unRead::before {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #ff5700;
  }
`;

export const QnARowText = styled.span`
  text-align: center;
  &:nth-child(1) {
    width: 10%;
  }
  &:nth-child(2) {
    width: 30%;
  }
  &:nth-child(3) {
    width: 40%;
    &.unRead {
      color: #0073aa;
    }
  }
  &:nth-child(4) {
    width: 20%;
  }
`;

export const ModalWrap = styled.div`
  position: absolute;
  border: 1px solid red;
  z-index: 1;
`;

export const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1c1c1c47;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 0.5px));
  width: 400px;
  min-height: 400px;
  background-color: white;
`;

export const ModalHeader = styled.header`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 10%);
  text-align: center;
`;

export const HeaderCloseWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 8px;
  background-color: #1d1d1d;
`;

export const HeaderClose = styled.img`
  width: 12px;
  cursor: pointer;
`;

export const HeaderInputWrap = styled.div`
  padding: 8px 24px;
`;

export const HeaderInputInner = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 4px;
  border: 0;
  background-color: #f6f6f6;
`;

export const HeaderInput = styled.input`
  flex: 1;
  margin-left: 10px;
  border: 0;
  border-radius: 0;
  background-color: transparent;
`;

export const ModalSection = styled.section`
  padding-top: 8px;
`;

export const SectionList = styled.ul`
  height: calc(400px - 65.2px);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: red;
  }
  ::-webkit-scrollbar-thumb {
    background: #979797;
  }
  > * {
    padding: 8px 0;
    padding-left: 10%;
    padding-right: 5%;
    box-sizing: border-box;
  }
`;

export const SectionListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ChatWrap = styled.main`
  > * {
    padding: 0 24px;
  }
`;

export const ChatHeader = styled.header`
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 16%);
`;

export const ChatInnerChatWrap = styled.div`
  height: calc(100vh - 144px);
  flex: 1;
  padding-right: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 8px;
  }
`;

export const ChatInnerChatMessageCommon = styled.div`
  display: inline-block;
  border-radius: 20px;
  padding: 8px 16px;
  letter-spacing: 2px;
  font-size: 12px;
  max-width: 50%;
  word-break: break-all;
  margin: 10px 0;
`;

export const ChatStudent = styled.div`
  text-align: left;
`;

export const StudentName = styled.div`
  padding: 4px 12px;
  font-size: 10px;
`;

export const StudentMessage = styled(ChatInnerChatMessageCommon)`
  background-color: #f2f2f2;
`;

export const ChatTeacher = styled.div`
  text-align: right;
`;
export const TeacherMessage = styled(ChatInnerChatMessageCommon)`
  background-color: #4898be;
  color: white;
`;

export const ChatInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 8px 12px;
  border-radius: 16px;
  margin: 12px 0;
`;

export const ChatInput = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  background-color: transparent;
`;

export const ChatSend = styled.img`
  width: 16px;
  cursor: pointer;
`;
