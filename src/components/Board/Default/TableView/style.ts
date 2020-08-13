import styled from 'styled-components';

export const TableViewWrapper = styled.table`
  width: 100%;
  font-size: 14px;
  text-align: center;
  table-layout: fixed;
`;

export const TableHeader = styled.thead`
  border-top: 2px solid #837266;
  background-color: #f2f2f2;
`;

export const TableBody = styled.tbody``;

export const HeaderRow = styled.tr`
  height: 45px;
  border-bottom: 1px solid #d3d3d3;
  box-sizing: border-box;
`;

export const HeaderColumn = styled.th`
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BodyRow = styled.tr`
  height: 45px;
  border-bottom: 1px solid #d3d3d3;
  box-sizing: border-box;
  background-color: #ffffff;
`;

export const BodyColumn = styled.td`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  &:nth-child(2) {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    text-align: left;
  }
`;
