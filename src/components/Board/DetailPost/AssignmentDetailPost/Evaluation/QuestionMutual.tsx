import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import * as S from './style';
import { COOPERATION, COMMUNICATION, EvaluationCategory } from './Evaluation';

import { Loading } from '../../../../../assets/Board/DetailPost';
import {
  apiPeerEvaluation,
  PeerEvaluation,
  apiTargetEvaluation,
} from '../../../../../lib/api/Evaluation';
import { tokenReIssuance } from '../../../../../lib/api/Admin/admin';
import { reducerType } from '../../../../../modules/reducer';

interface Props {
  target: string;
}

const QuestionMutual: FC<Props> = ({ target }) => {
  const params = useParams<{ id: string }>();
  const history = useHistory();
  const {
    Header: { userInfo },
    Evaluation: { peers },
  } = useSelector((state: reducerType) => state);
  const [CooperationScore, setCooperationScore] = useState<number>(0);
  const [communicationScore, setCommunicationScore] = useState<number>(0);
  const state = {
    [COOPERATION]: CooperationScore,
    [COMMUNICATION]: communicationScore,
  };
  const setMethod = {
    [COOPERATION]: setCooperationScore,
    [COMMUNICATION]: setCommunicationScore,
  };

  const isTargetFinish = () =>
    peers.some(({ student_id, finish }) => student_id === parseInt(target) && finish);

  const getScoreCheckButtonsByType = (type: EvaluationCategory) => {
    const buffer = [];
    for (let i = 3; i >= 1; i--) {
      buffer.push(
        <S.ScoreCheckButton
          key={type + i}
          onClick={() => {
            if (!isTargetFinish()) {
              setMethod[type](i);
            }
          }}
        >
          {state[type] === i && <S.BlackDot />}
        </S.ScoreCheckButton>,
      );
    }
    return buffer;
  };

  const isZeroScore = (): boolean => Object.keys(state).some(evalType => state[evalType] === 0);

  const submitPeer = async (peer: PeerEvaluation) => {
    await apiPeerEvaluation(peer);
    alert('동료평가가 성공적으로 제출되었습니다.');
    history.push(`/board/assignment-guide/${params.id}`);
  };

  const handleSubmit = async () => {
    if (isZeroScore()) {
      alert('동료평가를 모두 완료 후 제출해 주세요.');
      return;
    }
    const peer: PeerEvaluation = {
      assignment_id: parseInt(params.id),
      communication: communicationScore,
      cooperation: CooperationScore,
      target_id: parseInt(target),
    };
    try {
      await submitPeer(peer);
    } catch (err) {
      const code = err?.response?.status;
      if (!code) return;
      if (code === 401) {
        await tokenReIssuance();
        await submitPeer(peer);
      }
    }
  };

  const setAlreadyPeer = async () => {
    const { data } = await apiTargetEvaluation(params.id, target);
    setMethod[COMMUNICATION](data.communication);
    setMethod[COOPERATION](data.cooperation);
  };

  useEffect(() => {
    if (!isTargetFinish()) {
      setAlreadyPeer();
    }
  }, [peers, target]);

  return userInfo === null ? (
    <S.EvaluationLoading src={Loading} alt='loading' title='loading' />
  ) : (
    <>
      <S.FormHeader>
        <S.FormTitle>동료평가</S.FormTitle>
        <S.BlackStudentInfo>
          {`${userInfo?.studentNumber}`?.charAt(0)}학년 {`${userInfo?.studentNumber}`?.charAt(1)}반{' '}
          {userInfo?.name}
        </S.BlackStudentInfo>
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
            <div>
              <S.LeftAside>
                <S.QuestionTitle>과학적 정확성</S.QuestionTitle>
                <S.QuestionExplain>
                  실험 내용과 관련 과학 내용을 정확히 이해하고 있는가?
                </S.QuestionExplain>
              </S.LeftAside>
              <S.RightAside>{getScoreCheckButtonsByType(COOPERATION)}</S.RightAside>
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
          </S.QuestionBox>
        </S.ContentHeader>
        {!isTargetFinish() && <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>}
      </S.FormContent>
    </>
  );
};

export default QuestionMutual;
