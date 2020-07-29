import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ExperimentClassInfo from './ExperimentInfo';
import ExperimentClassSubmit from './ExperimentSubmit';
import { ExperimentSubject } from '../../../../modules/reducer/Admin/adminExperiment';
import ExperimentClassReport from './ExperimentReport';
import WithClass from '../WithClass';
import { getDeadline } from '../../../../lib/function/admin';

interface Props {
  subject: ExperimentSubject;
  classNum: number;
}

const ExperimentClass: FC<Props> = ({ subject, classNum }): ReactElement => {
  const { created_at, deadline, description, peer_evaluation_submit } = subject;

  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{classNum}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{description}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>
            {getDeadline(created_at, deadline)}
          </S.SubjectClsContentHeadTime>
        </S.SubjectClsContentHead>
        <S.SubjectClsContent>
          <ExperimentClassInfo subject={subject} />
          <ExperimentClassReport subject={subject} />
          <ExperimentClassSubmit members={peer_evaluation_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(ExperimentClass);
