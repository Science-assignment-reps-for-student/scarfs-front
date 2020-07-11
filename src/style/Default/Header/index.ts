import styled from 'styled-components';
import { DEFAULT_COLOR, MAIN_COLOR } from '../../../lib/style/color';

export const Header = styled.div`
  width: 100%;
  min-width: 1240px;
  height: 60px;
  background-color: white;
  > div.header {
    display: flex;
    align-items: center;
    max-width: 1240px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    > div.wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;

export const HeaderButton = styled.div`
  height: 100%;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrapper;
  margin-right: 60px;
  > p {
    color: ${DEFAULT_COLOR};
    height: 100%;
    display: flex;
    align-items: center;
  }
  > div {
    height: 2px;
    width: 1px;
    visibility: hidden;
    position: absolute;
    background-color: ${MAIN_COLOR};
    transition: all 0.3s;
  }
  &:hover > div {
    width: 100%;
    height: 2px;
    visibility: visible;
    align-self: flex-start;
  }
  &:hover > p {
    color: ${MAIN_COLOR};
  }
`;

export const HeaderUserButton = styled(HeaderButton)`
  margin: 0px 24px;
`;

export const HeaderUserButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  div.bar {
    height: 15px;
    border-right: 2px solid #979797;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 1.688rem;
  color: ${MAIN_COLOR};
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-weight: 400;
`;

export const HeaderSearch = styled.div`
  background-color: #f2f2f2;
  width: 338px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0px 9px 0px 9px;
  box-sizing: border-box;
  margin-right: 60px;
  > div {
    width: 12px;
    height: 12px;
  }
  > input {
    width: 300px;
    height: 28px;
    font-size: 0.9rem;
    border: none;
    background-color: #f2f2f2;
  }
`;

export default '';
