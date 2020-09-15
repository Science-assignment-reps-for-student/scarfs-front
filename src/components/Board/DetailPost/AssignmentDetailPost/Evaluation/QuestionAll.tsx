import React, { FC, useState, useCallback, useEffect, ReactElement } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as S from './style';
import { COOPERATION, COMMUNICATION, EvaluationCategory } from './Evaluation';

import { reducerType } from '../../../../../modules/reducer';
import { apiPeerEvaluation, PeerEvaluation } from '../../../../../lib/api/Evaluation';
import { tokenReIssuance } from '../../../../../lib/api/Admin/admin';

interface EvaluationState {
  cooperation: number;
  communication: number;
}

const QuestionAll: FC = () => {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const {
    Evaluation: { peers },
    Header: { userInfo },
  } = useSelector((state: reducerType) => state);
  const notFinishPeers = peers
    .filter(({ finish, student_id }) => !finish && student_id !== userInfo.id)
    .sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
  const [peerState, peerDispatch] = useState<EvaluationState[]>([]);

  const getScoreCheckButtonsByQuestionAndType = (
    question: EvaluationCategory,
    studentId: number,
    changeIdx: number,
  ) => {
    if (peerState.length === 0) return null;

    const buffer: ReactElement[] = [];
    for (let i = 3; i >= 1; i--) {
      buffer.push(
        <S.ScoreCheckButton
          key={`${studentId}_${question}_${i}`}
          onClick={() => {
            const prevArr = [...peerState];
            const prev = { ...prevArr[changeIdx] };
            prev[question] = i;
            prevArr[changeIdx] = prev;
            peerDispatch(prevArr);
          }}
        >
          {peerState[changeIdx][question] === i && <S.BlackDot />}
        </S.ScoreCheckButton>,
      );
    }
    return buffer;
  };

  const initPeerState = useCallback(
    (): EvaluationState[] => notFinishPeers.map(() => ({ [COMMUNICATION]: 0, [COOPERATION]: 0 })),
    [peers],
  );

  const isZeroScore = (): boolean =>
    peerState.some(({ communication, cooperation }) => communication === 0 || cooperation === 0);

  const submitAll = async () => {
    let i: number = 0;
    for await (const { student_id } of notFinishPeers) {
      const peer: PeerEvaluation = {
        assignment_id: parseInt(params.id),
        communication: peerState[i].communication,
        cooperation: peerState[i].cooperation,
        target_id: student_id,
      };
      await apiPeerEvaluation(peer);
      i += 1;
    }
    alert('동료평가가 성공적으로 제출되었습니다.');
    history.push(`/board/assignment-guide/${params.id}`);
  };

  const handleSubmit = async () => {
    if (isZeroScore()) {
      alert('동료평가를 모두 완료 후 제출해 주세요.');
      return;
    }
    try {
      await submitAll();
    } catch (err) {
      const code = err?.response?.status;
      if (!code) return;
      if (code === 401) {
        await tokenReIssuance();
        await submitAll();
      }
    }
  };

  const isAllFinish = (): boolean => peers.every(({ finish }) => finish);

  useEffect(() => {
    peerDispatch(initPeerState());
  }, [peers]);

  return (
    <>
      <S.FormHeader>
        <S.FormTitle>동료평가</S.FormTitle>
      </S.FormHeader>
      {isAllFinish() ? (
        <S.AllSubmitted>
          <p>모든 동료 평가를 완료하였습니다. 수고하셨습니다.</p>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            이전 페이지
          </button>
        </S.AllSubmitted>
      ) : (
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
            {notFinishPeers.map(({ student_id, student_name, student_number }, i: number) => (
              <S.QuestionBox key={student_id}>
                <S.BlueStudentInfo>
                  {student_number} {student_name}
                </S.BlueStudentInfo>
                <div>
                  <S.LeftAside>
                    <S.QuestionTitle>의사소통</S.QuestionTitle>
                    <S.QuestionExplain>
                      실험 과정에서 수시로 대화하며 의견을 나누었는가?
                    </S.QuestionExplain>
                    <S.QuestionExplain>
                      실험 과정과 결과 등을 다른 모둠원에게 쉽게 설명할 수 있는가?
                    </S.QuestionExplain>
                  </S.LeftAside>
                  <S.RightAside>
                    {getScoreCheckButtonsByQuestionAndType(COMMUNICATION, student_id, i)}
                  </S.RightAside>
                </div>
                <div>
                  <S.LeftAside>
                    <S.QuestionTitle>공동체(협력)</S.QuestionTitle>
                    <S.QuestionExplain>
                      실험에 적극적으로 참여하였으며 맡은 역할을 충실히 참여하였는가?
                    </S.QuestionExplain>
                  </S.LeftAside>
                  <S.RightAside>
                    {getScoreCheckButtonsByQuestionAndType(COOPERATION, student_id, i)}
                  </S.RightAside>
                </div>
              </S.QuestionBox>
            ))}
          </S.ContentHeader>
          <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
        </S.FormContent>
      )}
    </>
  );
};

export default QuestionAll;
