import React, { FC, ReactElement, useState, useEffect } from 'react';
import * as S from '../style';
import adminDownload from '../../../assets/Admin/adminDownload.svg';
import adminEdit from '../../../assets/Admin/adminEdit.svg';
import { ExperimentSubject } from 'src/modules/reducer/Admin/adminExperiment';

interface Props {
  cls: ExperimentSubject;
}

const ExperimentClassInfo: FC<Props> = ({ cls }): ReactElement => {
  const { peer_evaluation_submit, experiment_submit } = cls;
  const allTeam = experiment_submit.length;
  const allPeer = peer_evaluation_submit.length;
  const [oExp, setOExp] = useState(0);
  const [oPeer, setOPeer] = useState(0);

  useEffect(() => {
    experiment_submit.forEach(a => a.submit === 1 && setOExp(oExp + 1));
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
              {oExp}/{allTeam}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={allTeam} value={oExp}></S.AdminProgress>
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

export default ExperimentClassInfo;
