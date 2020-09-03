import styled from 'styled-components';
import { SearchIcon } from '../../../../../assets/Board/Default';
import { DeleteImage } from '../../../../../assets/Board/DetailPost';

export const AddTeamMemberModalBox = styled.div`
  width: 614px;
  height: 400px;
  display: flex;
`;

export const LeftAside = styled.aside``;

export const SearchBarBox = styled.div`
  width: 328px;
  height: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const SearchBar = styled.header`
  margin-left: 20px;
  background-color: #f6f6f6;
  padding: 5px 10px;
  width: 250px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const SearchButton = styled.img.attrs({
  src: SearchIcon,
  draggable: false,
})`
  width: 12px;
  height: 12px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
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

export const Header = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px 0 40px;
`;

export const Label = styled.h1`
  width: 52px;
  text-align: left;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
`;

export const TeamList = styled.main`
  height: 350px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 16px;
  }
`;

export const StudentItem = styled.div<{
  isClicked: boolean;
}>`
  user-select: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 40px;
  background-color: ${({ isClicked }) => (isClicked ? '#F2F2F2' : '#ffffff')};
`;

export const Text = styled.span`
  width: 52px;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
  height: 22px;
  display: block;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RightAside = styled.aside`
  width: 100%;
  background-color: #ffffff;
`;

export const Title = styled.p`
  padding: 8px 0 8px 21px;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid #1d1d1d;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 14px;
  color: #1d1d1d;
`;

export const SelectedTeamListBox = styled.div`
  padding: 0 10px;
  overflow-y: auto;
  height: 334px;
  &::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #979797;
    border-radius: 16px;
  }
`;

export const SelectedTeamItem = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  height: 30px;
  padding: 6px 0 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    border-top: 0.5px solid #979797;
  }
`;

export const ModifyTeamMemberButton = styled.button`
  background-color: #1d1d1d;
  color: #ffffff;
  width: 100%;
  height: 34px;
  cursor: pointer;
  border: none;
  border-radius: 0;
  outline: none;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BlueText = styled.span`
  display: block;
  font-size: 13px;
  line-height: 13px;
  height: 14px;
  color: #505bff;
  & + & {
    margin-left: 11px;
  }
`;

export const DeleteButton = styled.img.attrs({
  src: DeleteImage,
})`
  width: 8px;
  height: 8px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 10px;
`;
