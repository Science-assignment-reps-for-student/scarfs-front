import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const AdminWrap = styled.main`
  background-color: #f5f5f5;
  height: 100%;
  min-height: 100vh;
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
  animation: smooth 1s cubic-bezier(0.13, 1.07, 0.15, 1.06);
  transition: 1s;
  @keyframes smooth {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 0;
  font-size: 14px;
  cursor: pointer;
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
  word-break: break-all;
  img.shake {
    background-color: transparent;
    animation: shake 500ms alternate infinite;
    @keyframes shake {
      0% {
        transform: translateX(1px);
      }
      10% {
        transform: translateX(-1px);
      }
      20% {
        transform: translateX(-3px);
      }
      30% {
        transform: translateX(3px);
      }
      40% {
        transform: translateX(1px);
      }
      50% {
        transform: translateX(-1px);
      }
      60% {
        transform: translateX(-3px);
      }
      70% {
        transform: translateX(3px);
      }
      80% {
        transform: translateX(-1px);
      }
      90% {
        transform: translateX(1px);
      }
      100% {
        transform: translateX(1px);
      }
    }
  }
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

export const AdminProgress = styled.progress<Progress>`
  &[value] {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    -webkit-appearance: none;
    appearance: none;
  }
  &[value]::-webkit-progress-value {
    background-color: ${({ max, value }) => (max === value ? '#ff6f61' : '#0073aa')};
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
`;

const SubjectButtonStyle = `
  height: 30px;
  margin: 0 10px;
  padding: 4px 12px;
  border: 1px solid #1a1a1a;
  border-radius: 4px;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const SubjectButton = styled.button`
  position: relative;
  ${SubjectButtonStyle}
`;

interface ButtonProgress {
  width: number;
}

export const ButtonProgressWrap = styled.div<ButtonProgress>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ width }) => width}%;
  border-radius: 4px;
  transition: 50ms;

  .progress {
    height: 100%;
    width: 100%;
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
    background-color: #fcbc51;
    background-image: linear-gradient(
      45deg,
      rgb(252, 163, 17) 25%,
      transparent 25%,
      transparent 50%,
      rgb(252, 163, 17) 50%,
      rgb(252, 163, 17) 75%,
      transparent 75%,
      transparent
    );
    animation: progressAnimationStrike 6s;
  }

  .progress-bar {
    height: 100%;
    border-radius: 4px;
    transition: 0.4s linear;
    transition-property: width, background-color;
    background-color: #ee303c;
  }

  @keyframes progressAnimationStrike {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const ButtonProgress = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
  background-color: #fcbc51;
  background-image: linear-gradient(
    45deg,
    rgb(252, 163, 17) 25%,
    transparent 25%,
    transparent 50%,
    rgb(252, 163, 17) 50%,
    rgb(252, 163, 17) 75%,
    transparent 75%,
    transparent
  );
  animation: progressAnimationStrike 6s;
  @keyframes progressAnimationStrike {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const ButtonProgressBar = styled.div`
  height: 100%;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
  background-color: #ee303c;
`;

export const SubjectButtonEdit = styled(Link)`
  ${SubjectButtonStyle}
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const SubjectButtonImg = styled.img`
  width: 10px;
  height: 10px;
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
  margin?: string;
}

export const SBone = styled.div<ISkeletonBone>`
  display: inline-block;
  width: ${({ side, width = '0' }) => (side ? side : width)};
  height: ${({ side, height = '0' }) => (side ? side : height)};
  margin: ${({ margin = '0 0 0 0' }) => margin};
  border-radius: 4px;
  background: linear-gradient(-90deg, #d9d9d9 0%, white 50%, #d9d9d9 100%);
  animation: bone 1.2s infinite linear;
  @keyframes bone {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: ${({ side, width = '0' }) => (side ? side : width)} 0%;
    }
  }
  &.asideItem {
    margin-left: 4px;
    margin-right: 4px;
  }
  @media all and (min-width: 1180px) {
    &.asideItem {
      margin: 4px 0;
    }
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 50px;
  color: #ffffff;
  background-color: #1d1d1d;
  margin: 20px 0;
  border: none;
  border-radius: 0;
  outline: none;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  float: right;
  cursor: pointer;
`;

export const SSubject = styled.div`
  @media all and (min-width: 1180px) {
    &.asideWrap {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
    }
  }
`;

export const SClasses = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    margin: 24px 0;
  }
`;
