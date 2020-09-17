import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CurrentLocation = styled.div`
  font-size: 14px;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const EvaluationFormWrapper = styled.main`
  width: 100%;
  padding: 36px 95px 33px 71px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  margin: 31px 0 15px 0;
`;

export const FormHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
`;

export const BlackStudentInfo = styled.span`
  font-size: 13px;
  line-height: 13px;
  font-weight: 500;
`;

export const FormContent = styled.main`
  margin-top: 23px;
`;

export const ContentHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  height: 1.5px;
  background-color: #858585;
  border: none;
  margin: 9px 0 8px;
`;

export const ContentTitle = styled.p`
  font-size: 15px;
  line-height: 15px;
  font-weight: 500;
`;

export const EvaluationScoreExplainBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ScoreBox = styled.div`
  width: 126px;
  display: flex;
  justify-content: space-between;
`;

export const Score = styled.span`
  font-size: 13px;
  line-height: 13px;
  font-weight: 400;
`;

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
  }
  > div + div {
    margin-top: 16px;
  }
  & + & {
    margin-top: 25px;
  }
`;

export const LeftAside = styled.aside`
  flex: 1;
`;

export const BlueStudentInfo = styled.span`
  font-size: 15px;
  line-height: 15px;
  color: #578fff;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const QuestionTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const QuestionExplain = styled.p`
  font-size: 13px;
  font-weight: 300;
`;

export const RightAside = styled.aside`
  width: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.5px;
  box-sizing: border-box;
`;

export const ScoreCheckButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 14px;
  height: 14px;
  border-radius: 49%;
  border: 1px solid #2e2e2e;
`;

export const BlackDot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #2e2e2e;
  border: none;
  box-sizing: border-box;
  border-radius: 50%;
`;

export const SubmitButton = styled.button`
  position: absolute;
  left: 89%;
  top: 100%;
  width: 117px;
  height: 41px;
  background-color: #505bff;
  border: none;
  border-radius: 0;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-size: 13px;
  cursor: pointer;
  outline: none;
`;

export const EvaluationLoading = styled.img`
  display: block;
  margin: auto;
`;

export const AllSubmitted = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  > button {
    width: 117px;
    height: 41px;
    background-color: #505bff;
    border: none;
    border-radius: 0;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    outline: none;
  }
`;
