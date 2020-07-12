import styled from 'styled-components';

export const AdminHeader = styled.header`
  padding: 8px 100px;
  color: white;
  background-color: #23282D;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1180px;
  margin: auto;
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
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

export const HeaderNavItem = styled.li`
  margin: 0 32px;
  color: #858585;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  &.selected {
    padding-bottom: 4px;
    border-bottom: 2px solid white;
    color: white;
  }
`;

export const HeaderAccountButtonWrap = styled.button`
  padding: 0;
  padding-bottom: 4px;
  border: 0;
  border-bottom: 2px solid white;
  color: white;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;
