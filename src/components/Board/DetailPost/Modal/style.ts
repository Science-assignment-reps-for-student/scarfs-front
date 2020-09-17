import styled from 'styled-components';
import { closeImage } from '../../../../assets/Board/DetailPost';

export const ModalWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  min-width: 1340px;
  z-index: 3;
  position: fixed;
  left: 0;
  top: 60px;
  backdrop-filter: blur(5px);
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background-color: white;
  box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16);
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  padding: 0px 10px;
  box-sizing: border-box;
  > div.deleteImg {
    cursor: pointer;
    width: 8px;
    height: 8px;
    background-image: url(${closeImage});
    background-size: contain;
  }
`;
