import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Evaluation } from '../../../../../components';
import { setPeers } from '../../../../../modules/reducer/Evaluation';
import { reducerType } from '../../../../../modules/reducer';
import { apiPeerEvaluation } from '../../../../../lib/api/PeerEvaluationModal';
import { tokenReIssuance } from '../../../../../lib/api/Admin/admin';

const EvaluationContainer: FC = () => {
  const dispatch = useDispatch();
  const { peers } = useSelector((state: reducerType) => state.Evaluation);
  const params = useParams<{ id: string }>();
  const homeworkId = params.id;

  const handlePeers = async () => {
    const { data } = await apiPeerEvaluation(homeworkId);
    dispatch(setPeers(data));
  };

  const getPeers = async () => {
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
  };

  useEffect(() => {
    if (peers.length === 0) {
      getPeers();
    }
  }, [peers]);

  return <Evaluation />;
};

export default EvaluationContainer;
