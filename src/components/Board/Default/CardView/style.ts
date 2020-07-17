import styled, { css } from 'styled-components';

export const CardViewWrapper = styled.div`
  width: 100%;
`;

export const Top = styled.div`
  display: flex;
  > div {
    &:not(:last-child) {
      flex: 2;
    }
    &:last-child {
      flex: 1;
    }
  }
  margin-bottom: 10px;
`;

export const Bottom = styled.div`
  display: flex;
  > div {
    flex: 1;
  }
`;

interface FinishProps {
  isFinish?: boolean;
}

export const FinishBox = styled.div`
  z-index: 1;
  position: absolute;
  top: calc(100% - 52px);
  left: 0px;
  width: 0;
  height: 0;
  border-top: 52px solid transparent;
  border-left: 52px solid #578fff;
  &:before {
    content: '';
    position: absolute;
    bottom: calc(100% + 7.5px);
    right: calc(100% + 27px);
    width: 15px;
    height: 15px;
    border: 1.5px solid #ffffff;
    border-radius: 50%;
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin: 0;
  }
`;

export const CardBox = styled.div<FinishProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c3c3c3;
  padding: 15px 25px;
  background-color: #ffffff;
  ${({ isFinish }) =>
    isFinish
      ? css`
          border-top: 2px solid #ff5700;
          padding-top: 14px;
        `
      : css``}
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border: 1.5px solid #505bff;
    padding: 14.5px 24.5px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const BlueText = styled.span`
  color: #505bff;
  font-size: 15px;
  font-weight: bold;
`;

export const DeadLineText = styled.span`
  color: #000000;
  font-size: 14px;
  font-weight: bold;
`;

export const Main = styled.main``;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 400;
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 26px 0 10px;
`;

export const Content = styled.main`
  font-size: 14px;
  font-weight: 300;
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const ViewsText = styled.span`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
`;
