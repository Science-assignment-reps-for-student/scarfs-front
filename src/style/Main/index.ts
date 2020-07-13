import styled from 'styled-components';
import { megaphone, calender } from '../../asset/Main';

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0px 200px 0px 200px;
  box-sizing: border-box;
`;

export const TaskList = styled.div`
  width: 630px;
  height: 190px;
  display: flex;
  flex-wrap: wrap;
`;

export const TaskListComponent = styled.div`
  width: 300px;
  height: 80px;
  padding: 15px 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px #c3c3c3;
  margin: 15px 15px 0px 0px;
  cursor: pointer;
`;

export const TaskListComponentHeader = styled.div`
  width: 100%;
  font-size: 0.8125rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TaskListComponentAddButton = styled(TaskListComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.375rem;
  background-color: #505bff;
  cursor: pointer;
`;

export const TaskListComponentBody = styled.div`
  font-size: 1.4375rem;
`;

export const TaskListHeader = styled.div`
  width: 300px;
  height: 30px;
  padding: 0px 16px;
  background-color: #505bff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  color: white;
  > div {
    width: 20px;
    height: 20px;
  }
  > .calender {
    background-image: url(${calender});
  }
  > .megaphone {
    background-image: url(${megaphone});
  }
`;
