import React, { FC, ReactElement, useState, useEffect } from 'react';
import * as S from '../style';
import adminDownload from '../../../assets/Admin/adminDownload.svg';
import adminEdit from '../../../assets/Admin/adminEdit.svg';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';

interface Props {
  subject: TeamSubject;
}

const TeamClassInfo: FC<Props> = ({ subject }): ReactElement => {
  const { peer_evaluation_submit, team_submit } = subject;
  const teamLen = team_submit.length;
  const peerEvaluationLen = peer_evaluation_submit.length;
  const [teamSubmitLen, setTeamSubmitLen] = useState(0);
  const [peerSubmitLen, setPeerSubmitLen] = useState(0);

  useEffect(() => {
    team_submit.forEach(a => a.submit === 1 && setTeamSubmitLen(teamSubmitLen + 1));
    peer_evaluation_submit.forEach(a => a.submit === 1 && setPeerSubmitLen(peerSubmitLen + 1));
  }, [subject]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>팀 보고서</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출팀{' '}
            <span>
              {teamSubmitLen}/{teamLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={teamLen} value={teamSubmitLen}></S.AdminProgress>
        </S.InfoSubmittedCommon>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>동료평가</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출인원{' '}
            <span>
              {peerSubmitLen}/{peerEvaluationLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={peerEvaluationLen} value={peerSubmitLen}></S.AdminProgress>
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
      <S.SubjectButtonWrap>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminEdit} alt='edit' title='edit' />
          수정
        </S.SubjectButton>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminDownload} alt='download' title='download' />
          다운로드
        </S.SubjectButton>
      </S.SubjectButtonWrap>
    </S.SubjectClsContentInfo>
  );
};

export default TeamClassInfo;
