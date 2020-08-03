import React, { FC, useState, useCallback } from 'react';
import * as S from './style';

const QuestionAll: FC = () => {
  const [s1, setS1] = useState<{
    communication: number;
    cooperation: number;
  }>({ communication: 0, cooperation: 0 });
  const [s2, setS2] = useState<{
    communication: number;
    cooperation: number;
  }>({ communication: 0, cooperation: 0 });
  const getS1ScoreCheckButtonsByQuestion = useCallback(
    (question: 'communication' | 'cooperation') => {
      const buffer = [];
      for (let i = 3; i >= 1; i--) {
        buffer.push(
          <S.ScoreCheckButton
            key={`s1_${question}_${i}`}
            onClick={() =>
              setS1({
                ...s1,
                [question]: i,
              })
            }
          >
            {s1[question] === i && <S.BlackDot />}
          </S.ScoreCheckButton>,
        );
      }
      return buffer;
    },
    [s1],
  );
  const getS2ScoreCheckButtonsByQuestion = useCallback(
    (question: 'communication' | 'cooperation') => {
      const buffer = [];
      for (let i = 3; i >= 1; i--) {
        buffer.push(
          <S.ScoreCheckButton
            key={`s1_${question}_${i}`}
            onClick={() =>
              setS2({
                ...s1,
                [question]: i,
              })
            }
          >
            {s2[question] === i && <S.BlackDot />}
          </S.ScoreCheckButton>,
        );
      }
      return buffer;
    },
    [s2],
  );
  return (
    <>
      <S.FormHeader>
        <S.FormTitle>동료평가</S.FormTitle>
      </S.FormHeader>
      <S.FormContent>
        <S.ContentHeader>
          <S.ContentTitle>자신이 속한 모둠 활동을 평가해 봅시다.</S.ContentTitle>
          <S.Line />
          <S.EvaluationScoreExplainBox>
            <S.ScoreBox>
              <S.Score>상(3)</S.Score>
              <S.Score>중(2)</S.Score>
              <S.Score>하(1)</S.Score>
            </S.ScoreBox>
          </S.EvaluationScoreExplainBox>
          <S.QuestionBox>
            <S.BlueStudentInfo>2116 이우찬</S.BlueStudentInfo>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>의사소통</S.QuestionTitle>
                <S.QuestionExplain>
                  실험 과정에서 수시로 대화하며 의견을 나누었는가?
                </S.QuestionExplain>
                <S.QuestionExplain>
                  실험 과정과 결과 등을 다른 모둠원에게 쉽게 설명할 수 있는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getS1ScoreCheckButtonsByQuestion('communication')}</S.RightAside>
            </div>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>공동체(협력)</S.QuestionTitle>
                <S.QuestionExplain>
                  실험에 적극적으로 참여하였으며 맡은 역할을 충실히 참여하였는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getS1ScoreCheckButtonsByQuestion('cooperation')}</S.RightAside>
            </div>
          </S.QuestionBox>
          <S.QuestionBox>
            <S.BlueStudentInfo>2115 이성진</S.BlueStudentInfo>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>의사소통</S.QuestionTitle>
                <S.QuestionExplain>
                  실험 과정에서 수시로 대화하며 의견을 나누었는가?
                </S.QuestionExplain>
                <S.QuestionExplain>
                  실험 과정과 결과 등을 다른 모둠원에게 쉽게 설명할 수 있는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getS2ScoreCheckButtonsByQuestion('communication')}</S.RightAside>
            </div>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>공동체(협력)</S.QuestionTitle>
                <S.QuestionExplain>
                  실험에 적극적으로 참여하였으며 맡은 역할을 충실히 참여하였는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getS2ScoreCheckButtonsByQuestion('cooperation')}</S.RightAside>
            </div>
          </S.QuestionBox>
        </S.ContentHeader>
      </S.FormContent>
    </>
  );
};

export default QuestionAll;
