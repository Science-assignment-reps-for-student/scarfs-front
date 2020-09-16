import React, { FC, useEffect, useState, useCallback } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';
import SuccessBox from './SuccessBox';
import FailedBox from './FailedBox';
import PeerItem from './PeerItem';

import { Modal } from '../../Modal';
import { reducerType } from '../../../../../modules/reducer';
import { apiPeerEvaluation } from '../../../../../lib/api/PeerEvaluationModal';
import { Loading } from '../../../../../assets/Board/DetailPost';
import { tokenReIssuance } from '../../../../../lib/api/Admin/admin';
import { setPeers } from '../../../../../modules/reducer/Evaluation';

const PeerEvaluationModal: FC<{}> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<{ id: string }>('/board/assignment-guide/:id');
  const homeworkId = match.params.id;
  const {
    Header: { userInfo },
    Evaluation: { peers },
  } = useSelector((state: reducerType) => state);
  const [meFinish, setMeFinish] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePeers = useCallback(async () => {
    const { data } = await apiPeerEvaluation(homeworkId);
    data.forEach(({ student_id, finish }) => {
      if (student_id === userInfo.id) setMeFinish(finish);
    });
    dispatch(setPeers(data));
  }, []);

  const getPeers = useCallback(async () => {
    try {
      await handlePeers();
    } catch (err) {
      const code = err?.response?.status;
      if (!code) return;
      if (code === 401) {
        await tokenReIssuance();
        await handlePeers();
      }
    }
  }, []);

  const goSelfEvaluation = useCallback(() => {
    history.push(`/board/assignment-guide/${homeworkId}/evaluation?type=self`);
  }, [homeworkId]);

  const goPeerEvaluation = useCallback(
    (targetUuid: number) => {
      history.push(
        `/board/assignment-guide/${homeworkId}/evaluation?type=mutual&target=${targetUuid}`,
      );
    },
    [homeworkId],
  );

  const goAllEvaluation = useCallback(() => {
    history.push(`/board/assignment-guide/${homeworkId}/evaluation?type=all`);
  }, [homeworkId]);

  useEffect(() => {
    getPeers();
    setLoading(false);
  }, []);

  return (
    <Modal>
      <S.PeerEvaluationModalBox>
        {loading ? (
          <S.LoadingRolling src={Loading} alt='loading' title='loading' />
        ) : (
          <>
            <S.Label>본인</S.Label>
            <S.StudentBox>
              <S.StudentInfoBox>
                <S.BlueText>{userInfo.studentNumber}</S.BlueText>
                <S.BlueText>{userInfo.name}</S.BlueText>
              </S.StudentInfoBox>
              {meFinish ? (
                <SuccessBox goCallback={goSelfEvaluation} />
              ) : (
                <FailedBox goCallback={goSelfEvaluation} />
              )}
            </S.StudentBox>
            <S.Label>팀원</S.Label>
            {peers.map(
              ({ finish, student_id, student_name, student_number }) =>
                userInfo.id !== student_id && (
                  <PeerItem
                    key={student_id}
                    finish={finish}
                    goPeerEvaluation={() => goPeerEvaluation(student_id)}
                    student_name={student_name}
                    student_number={student_number}
                  />
                ),
            )}
          </>
        )}
      </S.PeerEvaluationModalBox>
      <S.AllEvaluateButton onClick={goAllEvaluation}>전체 평가</S.AllEvaluateButton>
    </Modal>
  );
};

export default PeerEvaluationModal;
