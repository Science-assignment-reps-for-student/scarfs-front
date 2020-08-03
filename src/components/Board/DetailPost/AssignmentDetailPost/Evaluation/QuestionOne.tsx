import React, { FC, useState, useCallback, Fragment } from 'react';
import * as S from './style';

interface Props {
  type: string;
  submitStatus?: {
    studentNo: number;
    name: string;
    scientificAccuracy: number;
    communication: number;
    cooperation: number;
  };
}

const QuestionOne: FC<Props> = ({
  type,
  submitStatus: { scientificAccuracy, communication, cooperation, studentNo } = {
    scientificAccuracy: 0,
    communication: 0,
    cooperation: 0,
    studentNo: 0,
  },
}) => {
  const [scientificAccuracyScore, setScientificAccuracyScore] = useState<number>(
    scientificAccuracy,
  );
  const [communicationScore, setCommunicationScore] = useState<number>(communication);
  const [cooperationScore, setCooperationScore] = useState<number>(cooperation);
  const state = {
    scientific: scientificAccuracyScore,
    communication: communicationScore,
    cooperation: cooperationScore,
  };
  const setMethod = {
    scientific: setScientificAccuracyScore,
    communication: setCommunicationScore,
    cooperation: setCooperationScore,
  };
  const getScoreCheckButtonsByType = (type: 'scientific' | 'communication' | 'cooperation') => {
    const buffer = [];
    for (let i = 3; i >= 1; i--) {
      buffer.push(
        <S.ScoreCheckButton
          key={`${type}${i}`}
          onClick={!studentNo ? () => setMethod[type](i) : () => {}}
        >
          {state[type] === i && <S.BlackDot />}
        </S.ScoreCheckButton>,
      );
    }
    return buffer;
  };
  return (
    <>
      <S.FormHeader>
        <S.FormTitle>{type === 'self' ? '본인평가' : '동료평가'}</S.FormTitle>
        {!!studentNo && <S.BlackStudentInfo>1학년 2반 강신희</S.BlackStudentInfo>}
      </S.FormHeader>
      <S.FormContent>
        <S.ContentHeader>
          <S.ContentTitle>
            {type === 'self'
              ? '자신의 활동을 스스로 평가해 봅시다.'
              : '자신이 속한 모둠 활동을 평가해 봅시다.'}
          </S.ContentTitle>
          <S.Line />
          <S.EvaluationScoreExplainBox>
            <S.ScoreBox>
              <S.Score>상(3)</S.Score>
              <S.Score>중(2)</S.Score>
              <S.Score>하(1)</S.Score>
            </S.ScoreBox>
          </S.EvaluationScoreExplainBox>
          <S.QuestionBox>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>과학적 정확성</S.QuestionTitle>
                <S.QuestionExplain>
                  실험 내용과 관련 과학 내용을 정확히 이해하고 있는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getScoreCheckButtonsByType('scientific')}</S.RightAside>
            </div>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>의사소통</S.QuestionTitle>
                <S.QuestionExplain>
                  모둠원들과 함께 문제 해결을 함께 고민하기 위해 다양한 의견을 제시하는 등 모둠
                  활동에 기여 하였는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getScoreCheckButtonsByType('communication')}</S.RightAside>
            </div>
            {type === 'self' && (
              <div>
                <S.LeftAside>
                  <S.QuestionTitle>공동체(협력)</S.QuestionTitle>
                  <S.QuestionExplain>
                    모둠 활동에 적극적으로 참여하였으며, 맡은 역할을 충실히 참여하였는가?
                  </S.QuestionExplain>
                </S.LeftAside>
                <S.RightAside>{getScoreCheckButtonsByType('cooperation')}</S.RightAside>
              </div>
            )}
          </S.QuestionBox>
        </S.ContentHeader>
      </S.FormContent>
    </>
  );
};

export default QuestionOne;
