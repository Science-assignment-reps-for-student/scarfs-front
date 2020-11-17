import React, { FC, ReactElement, useState, useEffect } from 'react';
import * as S from '../style';
import { TeamSubject } from '../../../../modules/reducer/Admin/adminTeam';

interface Props {
  subject: TeamSubject;
}

const TeamClassInfo: FC<Props> = ({ subject }): ReactElement => {
  const { peer_evaluation_submit, teams_info } = subject;
  const teamLen = teams_info.length;
  const peerEvaluationLen = peer_evaluation_submit.length;
  const [teamSubmitLen, setTeamSubmitLen] = useState(0);
  const [peerSubmitLen, setPeerSubmitLen] = useState(0);

  useEffect(() => {
    setTeamSubmitLen(0);
    setPeerSubmitLen(0);
    teams_info.forEach(a => a.submit === 1 && setTeamSubmitLen(prev => prev + 1));
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
              {teamSubmitLen}/{teamLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={teamLen} value={teamSubmitLen} />
        </S.InfoSubmittedCommon>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>동료평가</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출인원
            <span>
              {peerSubmitLen}/{peerEvaluationLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={peerEvaluationLen} value={peerSubmitLen} />
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
    </S.SubjectClsContentInfo>
  );
};

export default TeamClassInfo;
