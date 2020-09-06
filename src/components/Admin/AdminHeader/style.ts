import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminHeader = styled.header`
  padding: 8px 100px;
  color: white;
  background-color: #23282d;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
`;

export const HeaderLogoLink = styled(Link)`
  color: white !important;
`;

export const HeaderLogoWrap = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  font-size: 14px;
  font-family: 'Eras ITC';
  user-select: none;
`;

export const HeaderLogoScarfs = styled.div`
  font-weight: bold;
`;

export const HeaderLogoConsole = styled.div`
  font-weight: lighter;
`;

export const HeaderNavWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 72px;
  font-size: 14px;
`;

const HeaderHoveredCommonEffect = `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #858585 !important;
  .hovered {
    width: 1px;
    height: 2px;
    margin-top: 4px;
    background-color: white;
    visibility: hidden;
    transition: all 0.3s;
  }
  &:hover {
    color: white;
    .hovered {
      width: 100%;
      visibility: visible;
    }
  }
`;

export const HeaderNavItem = styled.li`
  margin: 0 32px;
  color: #858585;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderLink = styled(Link)`
  ${HeaderHoveredCommonEffect}
  border: 0;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  &.visit {
    color: white !important;
  }
`;
