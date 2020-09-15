import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as S from './style';
import { SELF } from './Evaluation';

import { Loading } from '../../../../../assets/Board/DetailPost';
import { apiSelfEvaluation, SelfEvaluation } from '../../../../../lib/api/Evaluation';
import { tokenReIssuance } from '../../../../../lib/api/Admin/admin';
import { reducerType } from '../../../../../modules/reducer';

interface Props {
  type: string;
}

const SCIENTIFIC = 'scientific' as const;
const COMMUNICATION = 'communication' as const;
const COOPERATION = 'cooperation' as const;

type EvaluationTypes = typeof SCIENTIFIC | typeof COMMUNICATION | typeof COOPERATION;

const QuestionOne: FC<Props> = ({ type }) => {
  const params = useParams<{ id: string }>();
  const history = useHistory();
  const { userInfo } = useSelector((state: reducerType) => state.Header);
  const [scientificAccuracyScore, setScientificAccuracyScore] = useState<number>(0);
  const [communicationScore, setCommunicationScore] = useState<number>(0);
  const [cooperationScore, setCooperationScore] = useState<number>(0);
  const state = {
    [SCIENTIFIC]: scientificAccuracyScore,
    [COMMUNICATION]: communicationScore,
    [COOPERATION]: cooperationScore,
  };
  const setMethod = {
    [SCIENTIFIC]: setScientificAccuracyScore,
    [COMMUNICATION]: setCommunicationScore,
    [COOPERATION]: setCooperationScore,
  };

  const getScoreCheckButtonsByType = (type: EvaluationTypes) => {
    const buffer = [];
    for (let i = 3; i >= 1; i--) {
      buffer.push(
        <S.ScoreCheckButton
          key={type + i}
          onClick={() => {
            setMethod[type](i);
          }}
        >
          {state[type] === i && <S.BlackDot />}
        </S.ScoreCheckButton>,
      );
    }
    return buffer;
  };

  const isZeroScore = (): boolean => Object.keys(state).some(evalType => state[evalType] === 0);

  const submitSelf = async (self: SelfEvaluation) => {
    await apiSelfEvaluation(self);
    alert('본인 평가가 성공적으로 제출되었습니다.');
    history.push(`/board/assignment-guide/${params.id}`);
  };

  const handleSubmit = async () => {
    console.log('self 제출하기!');
    if (isZeroScore()) {
      alert('본인평가를 모두 완료 후 제출해 주세요.');
      return;
    } else {
      const self: SelfEvaluation = {
        assignment_id: parseInt(params.id),
        attitude: cooperationScore,
        communication: communicationScore,
        scientific_accuracy: scientificAccuracyScore,
      };
      try {
        await submitSelf(self);
      } catch (err) {
        const code = err?.response?.status;
        if (!code) return;
        if (code === 401) {
          await tokenReIssuance();
          await submitSelf(self);
        }
      }
    }
  };

  return userInfo === null ? (
    <S.EvaluationLoading src={Loading} alt='loading' title='loading' />
  ) : (
    <>
      <S.FormHeader>
        <S.FormTitle>{type === 'self' ? '본인평가' : '동료평가'}</S.FormTitle>
        <S.BlackStudentInfo>
          {`${userInfo?.studentNumber}`?.charAt(0)}학년 {`${userInfo?.studentNumber}`?.charAt(1)}반{' '}
          {userInfo?.name}
        </S.BlackStudentInfo>
      </S.FormHeader>
      <S.FormContent>
        <S.ContentHeader>
          <S.ContentTitle>
            {type === SELF
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
              <S.RightAside>{getScoreCheckButtonsByType(SCIENTIFIC)}</S.RightAside>
            </div>
            <div>
              <S.LeftAside>
                <S.QuestionTitle>의사소통</S.QuestionTitle>
                <S.QuestionExplain>
                  모둠원들과 함께 문제 해결을 함께 고민하기 위해 다양한 의견을 제시하는 등 모둠
                  활동에 기여 하였는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getScoreCheckButtonsByType(COMMUNICATION)}</S.RightAside>
            </div>
            {type === SELF && (
              <div>
                <S.LeftAside>
                  <S.QuestionTitle>공동체(협력)</S.QuestionTitle>
                  <S.QuestionExplain>
                    모둠 활동에 적극적으로 참여하였으며, 맡은 역할을 충실히 참여하였는가?
                  </S.QuestionExplain>
                </S.LeftAside>
                <S.RightAside>{getScoreCheckButtonsByType(COOPERATION)}</S.RightAside>
              </div>
            )}
          </S.QuestionBox>
        </S.ContentHeader>
        <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
      </S.FormContent>
    </>
  );
};

export default QuestionOne;
