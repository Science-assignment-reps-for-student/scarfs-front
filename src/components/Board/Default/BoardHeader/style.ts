import styled from 'styled-components';
import {
  SearchIcon,
  TableTypeIcon,
  TableTypeActiveIcon,
  CardTypeIcon,
  CardTypeActiveIcon,
} from '../../../../assets/Board/Default';

export const BoardHeaderWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const Header = styled.header`
  font-size: 14px;
  text-align: right;
`;
export const Bold = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 25px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  cursor: pointer;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: flex-end;
`;

export const SearchBar = styled.div`
  background-color: #f6f6f6;
  padding: 5px 10px;
  width: 300px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const SearchButton = styled.img.attrs({
  src: SearchIcon,
})`
  width: 12px;
  height: 12px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  width: 93%;
  height: 19px;
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
`;

interface BoardTypeProps {
  isActive: boolean;
}

export const TableTypeButton = styled.img.attrs<BoardTypeProps>(({ isActive }) => ({
  src: isActive ? TableTypeActiveIcon : TableTypeIcon,
}))<BoardTypeProps>`
  width: 25px;
  height: 25px;
  object-fit: contain;
  cursor: pointer;
`;

export const CardTypeButton = styled.img.attrs<BoardTypeProps>(({ isActive }) => ({
  src: isActive ? CardTypeActiveIcon : CardTypeIcon,
}))<BoardTypeProps>`
  width: 25px;
  height: 25px;
  object-fit: contain;
  cursor: pointer;
`;
