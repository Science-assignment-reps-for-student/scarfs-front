import styled, { css } from 'styled-components';

export const AdminWrap = styled.main`
  background-color: #f5f5f5;
  height: 100%;
  padding-bottom: 48px;
`;

export const AdminTitle = styled.h2`
  padding: 32px 24px 8px;
  border-bottom: 2px solid #d5d5d5;
`;

export const AdminContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;

  @media all and (max-width: 1180px) {
    flex-direction: column-reverse;
  }
`;

export const AdminSection = styled.section`
  width: 90%;

  @media all and (max-width: 1180px) {
    width: auto;
  }
`;

export const SubjectWrap = styled.article`
  &:not(:first-child) {
    margin-top: 56px;
  }
`;

export const SubjectTitle = styled.h3`
  padding: 8px 0;
  border-bottom: 1px solid #d5d5d5;
  font-size: 28px;
`;

export const Subject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SubjectCls = styled.div`
  width: 49%;
`;

export const SubjectClsTitle = styled.h4`
  padding: 8px 0;
  font-size: 18px;
`;

export const SubjectClsContentWrap = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background-color: white;
`;

export const SubjectClsContentHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 12px;
  border-bottom: 1px solid #e2e2e2;
`;

export const SubjectClsContentHeadTitle = styled.span`
  font-weight: bold;
`;

export const SubjectClsContentHeadTime = styled.span`
  font-size: 12px;
`;

export const SubjectClsContent = styled.div`
  display: flex;
  height: 240px;
  > * {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const SubjectClsContentInfo = styled.div`
  padding: 4px 12px;
`;

export const InfoSubmitted = styled.div``;

export const InfoSubmittedCommon = styled.div`
  min-height: 85px;
`;

export const InfoSubmittedTitle = styled.p`
  padding: 8px 0;
  text-align: center;
`;

export const InfoSubmittedMembers = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
`;

export const SubjectClsContentCommon = styled.div``;

export const SubjectClsContentCommonTitle = styled.h5`
  padding: 4px 6px;
  box-shadow: 0 1px #505050;
`;

export const SubjectClsContentCommonList = styled.ul`
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    background: #3f51b5;
    border-radius: 16px;
  }
`;

export const SubjectClsContentCommonItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
  font-size: 14px;
  &:first-child {
    background-color: #f5f5f5;
    > span:last-child {
      font-size: 10px;
    }
  }
  &.unSubmit {
    background-color: #f5f5f5;
  }
`;

export const SubjectClsContentCommonItemText = styled.span`
  flex: 1;
  text-align: center;
`;

export const SubjectClsContentReport = styled(SubjectClsContentCommon)`
  border-right: 1px solid #858585;
  border-left: 1px solid #858585;
`;

export const SubjectClsContentMembers = styled(SubjectClsContentCommon)``;

interface Progress {
  max: number | string;
  value: number | string;
}

export const AdminProgress = styled.progress`
  &[value] {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    -webkit-appearance: none;
    appearance: none;
  }
  &[value]::-webkit-progress-value {
    background-color: ${({ max, value }: Progress) => (max === value ? '#ff6f61' : '#0073aa')};
  }
  &[value]::-webkit-progress-bar {
    background-color: #e1e1e1;
  }
`;

export const SubjectButtonWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin: 16px 0;
  justify-content: space-between;
`;

export const SubjectButton = styled.button`
  height: 30px;
  padding: 4px 12px;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const SubjectButtonImg = styled.img`
  margin-right: 4px;
`;

export const AdminAside = styled.aside`
  flex: 1;
  padding-left: 4px;
`;

export const AdminAsideTitle = styled.h3`
  padding: 8px 0;
  border-bottom: 2px solid #d5d5d5;
  font-size: 28px;
`;

export const AdminAsideList = styled.ul`
  @media all and (max-width: 1180px) {
    display: flex;
  }
`;

export const AdminAsideItem = styled.li`
  padding: 4px 0;
  cursor: pointer;
  &:nth-child(4) {
    border-bottom: 2px solid #d5d5d5;
  }
  @media all and (max-width: 1180px) {
    margin: 0 16px;
    border-bottom: 0;
    &:nth-child(4) {
      border-bottom: 0;
    }
  }
`;

export const AdminAsideCheckBox = styled.input`
  cursor: pointer;
`;

export const AdminAsideLabel = styled.label`
  cursor: pointer;
  user-select: none;
`;

interface ISkeletonBone {
  side?: string;
  width?: string;
  height?: string;
}

export const SBone = styled.div`
  display: inline-block;
  width: ${({ side, width = '0' }: ISkeletonBone) => (side ? side : width)};
  height: ${({ side, height = '0' }: ISkeletonBone) => (side ? side : height)};
  margin-top: 50px;
  border-radius: 4px;
  background-color: #d9d9d9;
`;

export const SSubject = styled.div``;

export const SClasses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > .back {
    margin: 24px 0;
  }
`;