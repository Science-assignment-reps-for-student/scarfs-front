import styled from 'styled-components';
import { megaphone, calender, logo, logout, background, logoutLogo } from '../../../asset/Main';

export const Background = styled.div`
  width: 100%;
  height: 152px;
  background-image: url(${background});
`;

export const Body = styled.div`
  width: 100%;
  min-width: 1342px;
  padding: 0px 200px 0px 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const Wrapper = styled.div<{ margin: number }>`
  margin-top: ${props => props.margin}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const TaskListWrapper = styled.div`
  height: 600px;
  align-self: flex-end;
`;

export const TaskList = styled.div`
  width: 630px;
  height: 190px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
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
  > .point {
    color: #505bff;
  }
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
  margin-top: 80px;
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

export const Logo = styled.div`
  width: 500px;
  height: 380px;
`;

export const LogoTitle = styled.p`
  width: 380px;
  font-size: 1.625rem;
  text-align: right;
  > span.point {
    color: #505bff;
  }
  font-weight: 500;
`;

export const LogoSubTitle = styled(LogoTitle)`
  font-weight: 300;
  text-align: left;
`;

export const LogoImg = styled.div`
  background-image: url(${logo});
  width: 100%;
  height: 263px;
`;

export const LogoText = styled.p`
  margin-top: 30px;
  font-size: 0.6875rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-align: right;
`;

export const LogoTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const UserMain = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 132px;
  align-self: flex-end;
  > div {
    width: 365px;
    height: 100px;
    display: flex;
  }
`;

export const UserInfo = styled.div`
  width: 250px;
  height: 100%;
  padding: 14px 29px;
  box-sizing: border-box;
  box-shadow: 2px 2px 1px 1px #d3d3d3;
  border: 1px solid #d3d3d3;
`;

export const UserInfoName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 16px;
`;

export const UserInfoTask = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const UserInfoTaskDetail = styled.div`
  > p {
    margin: 1px;
  }
  > .remain {
    color: #ff5700;
  }
  > .complete {
    color: #505bff;
  }
`;

export const UserInfoButton = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #505bff;
  margin-left: 15px;
  box-shadow: 2px 2px 1px 1px #d3d3d3;
  cursor: pointer;
  > div {
    > div {
      width: 30px;
      height: 30px;
      margin: 0 auto;
      background-image: url(${logout});
      margin-bottom: 5px;
    }
    > p {
      font-size: 0.75rem;
      color: white;
      font-weight: 500;
    }
  }
`;

export const SideBar = styled.div`
  color: #505bff;
  > p {
    margin-top: 80px;
    transform: rotate(90deg);
    font-size: 0.9375rem;
    letter-spacing: 5px;
  }
`;

export const LogOutedLogo = styled.div`
  width: 552px;
  height: 333px;
  background-image: url(${logoutLogo});
`;

export const LogOutedButtonWrapper = styled.div`
  width: 380px;
  display: flex;
  justify-content: flex-end;
`;

export const LoginButton = styled.div`
  width: 150px;
  height: 40px;
  background-color: #505bff;
  border: 1px solid #505bff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 7px;
`;

export const SignUpButton = styled(LoginButton)`
  color: #505bff;
  background-color: white;
`;

export const LogOutedLogoTextWrapper = styled.div`
  width: 432px;
  align-self: flex-end;
`;

export const LogOutedLogoTitle = styled(LogoTitle)`
  text-align: left;
`;

export const LogOutedWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 80px;
`;
