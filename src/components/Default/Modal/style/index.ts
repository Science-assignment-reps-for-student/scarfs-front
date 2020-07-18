import styled from 'styled-components';
import { circle, deleteIcon, successImg } from '../../../../assets/Modal';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1340px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 330px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid #d3d3d3;
  z-index: 1;
`;

export const ModalBody = styled.div`
  padding: 0px 25px;
  box-sizing: border-box;
  width: 100%;
  height: 405px;
`;

export const ModalTitle = styled.p`
  font-size: 1.8125rem;
  font-weight: 600;
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
    width: 7px;
    height: 7px;
    background-image: url(${deleteIcon});
  }
`;

export const ModalTitleAndLogoWrapper = styled.div<{ marginTop: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: ${props => props.marginTop}px;
`;

export const ModalButton = styled.div<{ whiteThema: boolean }>`
  background-color: ${props => (props.whiteThema ? 'white' : 'black')};
  color: ${props => (props.whiteThema ? 'black' : 'white')};
  width: 100%;
  height: 35px;
  text-align: center;
  font-size: 1.0625rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalText = styled.p`
  font-size: 0.8125rem;
  margin-right: 10px;
`;

export const ModalInput = styled.input<{ isEmpty: boolean }>`
  width: 276px;
  height: 35px;
  border: 1px solid ${props => (props.isEmpty ? '#858585' : '#505BFF')};
  border-radius: 0px;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const ModalInputWrapper = styled.div`
  width: 100%;
  height: 55px;
  margin-bottom: 13px;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const ModalCodeInputWrapper = styled.div<{ isError: boolean; isSuccess: boolean }>`
  width: 100%;
  height: 39px;
  margin-bottom: 15px;
  display: flex;
  border: 1px solid
    ${props => (props.isError ? '#FF5700' : props.isSuccess ? '#505BFF' : '#1D1D1D')};
  > div {
    background-color: ${props =>
      props.isError ? '#FF5700' : props.isSuccess ? '#505BFF' : '#1D1D1D'};
    color: white;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s;
    > div.success {
      width: 24px;
      height: 24px;
      background-image: url(${successImg});
    }
  }
`;

export const ModalEmailInputWrapper = styled.div<{ isError: boolean; isAble: boolean }>`
  width: 100%;
  height: 39px;
  margin-bottom: 15px;
  display: flex;
  border: 1px solid ${props => (props.isError ? '#FF5700' : props.isAble ? '#505BFF' : '#1D1D1D')};
  > div {
    background-color: ${props =>
      props.isError ? '#FF5700' : props.isAble ? '#505BFF' : '#1D1D1D'};
    color: white;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const ModalCodeInput = styled(ModalInput)`
  width: 230px;
  border-radius: 1px;
  border: none;
  padding: 0px 10px;
  box-sizing: border-box;
`;

export const ModalHalfInputWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  margin-bottom: 13px;
  > div {
    > div {
      align-items: center;
      display: flex;
    }
  }
`;

export const ModalHalfInput = styled(ModalInput)`
  width: 130px;
  margin-right: 10px;
`;

export const ModalSubTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.5625rem;
  color: #1d1d1d;
  margin-bottom: 5px;
  align-self: flex-end;
`;

export const ModalTextIcon = styled.div<{ isEmpty: boolean }>`
  width: 4px;
  height: 4px;
  background-color: ${props => (props.isEmpty ? '#FF5700' : '#505BFF')};
  transform: rotate(45deg);
`;

export const ModalIcon = styled.div`
  background-image: url(${circle});
  width: 25px;
  height: 25px;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
`;
