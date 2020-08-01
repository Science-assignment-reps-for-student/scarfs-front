import styled from 'styled-components';

export const AlertModalCommon = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 16px 0;
  text-align: center;
  color: #1d1d1d;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 16%);
  font-size: 14px;
  z-index: 10000;
`;

export const NotifyWrap = styled(AlertModalCommon)``;
export const WarnWrap = styled(AlertModalCommon)``;

export const AlertTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0 2px;
  }
`;

export const AlertExplain = styled.p`
  max-height: 160px;
  margin: 16px 0;
  overflow-y: scroll;
  word-break: break-all;
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

export const AlertButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlertButton = styled.button`
  margin: 0 10px;
  padding: 4px 24px;
  border: 1px solid #1d1d1d;
  box-shadow: 2px 2px 0 rgba(0, 0, 0, 10%);
  font-size: 18px;
  font-weight: bold;
  transition: 0.3s;
  opacity: 0.5;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const AlertCheck = styled(AlertButton)`
  color: white;
  background-color: #1d1d1d;
`;

export const AlertCancel = styled(AlertButton)`
  background-color: white;
`;
