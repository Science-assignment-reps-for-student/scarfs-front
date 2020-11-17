import React, { FC, ReactElement } from 'react';

import ExperimentClassInfo from './ExperimentInfo';
import ExperimentClassSubmit from './ExperimentSubmit';
import ExperimentClassReport from './ExperimentReport';

import * as S from '../style';
import WithClass from '../WithClass';
import { ExperimentSubject } from '../../../../modules/reducer/Admin/adminExperiment';
import { getDeadline } from '../../../../lib/function/admin';

interface Props {
  subject: ExperimentSubject;
  classNum: number;
}

const ExperimentClass: FC<Props> = ({ subject, classNum }): ReactElement => {
  const { created_at, deadline, title } = subject;

  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{classNum}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{title}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>
            {getDeadline(created_at, deadline)}
          </S.SubjectClsContentHeadTime>
        </S.SubjectClsContentHead>
        <S.SubjectClsContent>
          <ExperimentClassInfo subject={subject} />
          <ExperimentClassReport subject={subject} />
          <ExperimentClassSubmit subject={subject} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(ExperimentClass);
