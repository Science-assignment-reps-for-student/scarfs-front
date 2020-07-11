import styled from 'styled-components';

export const AdminHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 100px;
  color: white;
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

export const HeaderAccountButtonWrap = styled.button`
  padding: 0;
  padding-bottom: 4px;
  border: 0;
  border-bottom: 2px solid white;
  color: white;
  background-color: transparent;
  font-size: 12px;
  font-weight: bold;
`;
