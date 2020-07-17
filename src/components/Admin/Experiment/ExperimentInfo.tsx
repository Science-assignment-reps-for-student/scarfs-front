import React, { FC, ReactElement, useState, useEffect } from 'react';
import * as S from '../style';
import adminDownload from '../../../assets/Admin/adminDownload.svg';
import adminEdit from '../../../assets/Admin/adminEdit.svg';
import { ExperimentSubject } from 'src/modules/reducer/Admin/adminExperiment';

interface Props {
  subject: ExperimentSubject;
}

const ExperimentClassInfo: FC<Props> = ({ subject }): ReactElement => {
  const { experiment_submit, peer_evaluation_submit } = subject;
  const experimentLen = experiment_submit.length;
  const peerEvaluationLen = peer_evaluation_submit.length;
  const [experimentSubmitLen, setExperimentSubmitLen] = useState(0);
  const [peerSubmitLen, setPeerSubmitLen] = useState(0);

  useEffect(() => {
    experiment_submit.forEach(a => a.submit === 1 && setExperimentSubmitLen(prev => prev + 1));
    peer_evaluation_submit.forEach(a => a.submit === 1 && setPeerSubmitLen(prev => prev + 1));
  }, [subject]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedTitle>팀 보고서</S.InfoSubmittedTitle>
          <S.InfoSubmittedMembers>
            제출팀{' '}
            <span>
              {experimentSubmitLen}/{experimentLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={experimentLen} value={experimentSubmitLen}></S.AdminProgress>
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

export default ExperimentClassInfo;
