import React, { FC, ReactElement, useState, useEffect } from 'react';

import * as S from '../style';
import { ExperimentSubject } from '../../../../modules/reducer/Admin/adminExperiment';

interface Props {
  subject: ExperimentSubject;
}

const ExperimentClassInfo: FC<Props> = ({ subject }): ReactElement => {
  const { teams_info, peer_evaluation_submit } = subject;
  const experimentLen = teams_info.length;
  const peerEvaluationLen = peer_evaluation_submit.length;
  const [experimentSubmitLen, setExperimentSubmitLen] = useState(0);
  const [peerSubmitLen, setPeerSubmitLen] = useState(0);

  useEffect(() => {
    setExperimentSubmitLen(0);
    setPeerSubmitLen(0);
    teams_info.forEach(a => a.submit === 1 && setExperimentSubmitLen(prev => prev + 1));
    peer_evaluation_submit.forEach(a => a.submit === 1 && setPeerSubmitLen(prev => prev + 1));
  }, [subject]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>팀 보고서</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출팀
            <span>
              {experimentSubmitLen}/{experimentLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={experimentLen} value={experimentSubmitLen}></S.AdminProgress>
        </S.InfoSubmittedCommon>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>동료평가</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출인원
            <span>
              {peerSubmitLen}/{peerEvaluationLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={peerEvaluationLen} value={peerSubmitLen}></S.AdminProgress>
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
    </S.SubjectClsContentInfo>
  );
};

export default ExperimentClassInfo;
