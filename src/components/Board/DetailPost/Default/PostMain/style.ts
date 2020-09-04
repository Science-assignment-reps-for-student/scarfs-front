import styled from 'styled-components';

export const PostMainWrapper = styled.main`
  display: flex;
  width: 100%;
  height: 550px;
  box-shadow: 0 2px rgba(0, 0, 0, 0.1);
`;

export const LeftAside = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #edeae8;
  border: 1px solid #979797;
  box-sizing: border-box;
`;

export const PostBox = styled.main`
  width: 410px;
  box-sizing: border-box;
  max-height: 394px;
  padding: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export const PostTitle = styled.h1`
  font-size: 20px;
  line-height: 20px;
  font-weight: bold;
`;

export const PostType = styled.span`
  font-size: 13px;
  line-height: 13px;
  font-weight: bold;
`;

export const InfoDetail = styled.div`
  display: flex;
  min-height: 39px;
  box-sizing: border-box;
  padding: 11px 0 11px;
  border-top: 1px solid #707070;
  &:last-child {
    border-bottom: 1px solid #707070;
  }
`;

export const InfoTitle = styled.li`
  font-size: 13px;
  line-height: 13px;
  font-weight: bold;
  height: 16px;
  width: 85px;
`;

export const FileBox = styled.div`
  flex: 1;
  width: calc(100% - 85px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  &::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #3f51b5;
    border-radius: 16px;
  }
`;

export const BlueText = styled.span`
  font-size: 13px;
  line-height: 13px;
  height: 16px;
  font-weight: 500;
  color: #505bff;
`;

export const File = styled.a`
  font-size: 13px;
  font-weight: 500;
  height: 16px;
  line-height: 13px;
  color: #ff5700;
  & + & {
    margin-top: 10px;
  }
`;

export const LeaderText = styled.span`
  font-size: 13px;
  line-height: 13px;
  height: 16px;
  font-weight: 600;
  color: #505bff;
`;

export const TeamText = styled.span`
  font-size: 13px;
  line-height: 13px;
  height: 16px;
  font-weight: 500;
  color: #000000;
  margin-left: 4px;
`;

export const PostContentBox = styled.section`
  flex: 1;
  font-size: 13px;
  color: #1d1d1d;
  border: 1px solid #c3c3c3;
  border-left: none;
  background-color: #ffffff;
  > div {
    overflow-y: scroll;
    max-height: 488px;
    margin: 30px;
    > pre {
      white-space: pre-wrap;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 180px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #2c2c2c;
    border-radius: 0;
  }
`;

export const NearbyPost = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  align-items: center;
  padding: 32px 40px;
  font-size: 13px;
  line-height: 13px;
  color: #464646;
  border-top: 1px solid #979797;
  box-sizing: border-box;
  background-color: #e5e1de;
  &:first-of-type {
    border-bottom: 1px solid #979797;
  }
`;

export const NearbyPostTitle = styled.span`
  color: #1d1d1d;
  margin-right: 22px;
`;
