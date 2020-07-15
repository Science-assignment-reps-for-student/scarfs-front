import React, { FC, ReactElement, useState, useEffect } from 'react';
import * as S from '../style';
import adminDownload from '../../../assets/Admin/adminDownload.svg';
import adminEdit from '../../../assets/Admin/adminEdit.svg';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';

interface Props {
  cls: TeamSubject;
}

const TeamClassInfo: FC<Props> = ({ cls }): ReactElement => {
  const { peer_evaluation_submit, team_submit } = cls;
  const allTeam = cls.team_submit.length;
  const allPeer = cls.peer_evaluation_submit.length;
  const [oTeam, setOTeam] = useState(0);
  const [oPeer, setOPeer] = useState(0);

  useEffect(() => {
    team_submit.forEach(a => a.submit === 1 && setOTeam(oTeam + 1));
    peer_evaluation_submit.forEach(a => a.submit === 1 && setOPeer(oPeer + 1));
  }, [cls]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>팀 보고서</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출팀{' '}
            <span>
              {oTeam}/{allTeam}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={allTeam} value={oTeam}></S.AdminProgress>
        </S.InfoSubmittedCommon>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>동료평가</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출인원{' '}
            <span>
              {oPeer}/{allPeer}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={allPeer} value={oPeer}></S.AdminProgress>
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
