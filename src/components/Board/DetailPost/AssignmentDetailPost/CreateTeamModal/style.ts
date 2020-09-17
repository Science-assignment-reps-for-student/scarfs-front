import styled from 'styled-components';

export const CreateTeamModalBox = styled.div`
  width: 290px;
  height: 85px;
  background-color: #1d1d1d;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputTeamName = styled.input`
  display: block;
  width: 248px;
  margin: 0 auto;
  border-radius: 0;
  border: none;
  background-color: #2c2c2c;
  box-sizing: border-box;
  padding: 8px 10px;
  color: white;
  &::placeholder {
    color: #d3d3d3;
  }
`;

export const CreateButton = styled.button`
  width: 100%;
  height: 35px;
  border: none;
  border-top: 1px solid #464646;
  border-radius: 0;
  background-color: #1d1d1d;
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  padding-bottom: 3px;
`;
