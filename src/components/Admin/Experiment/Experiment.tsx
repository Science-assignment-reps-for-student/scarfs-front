import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ExperimentClassInfo from './ExperimentInfo';
import ExperimentClassSubmit from './ExperimentSubmit';
import { ExperimentSubject } from 'src/modules/reducer/Admin/adminExperiment';
import ExperimentClassReport from './ExperimentReport';

interface Props {
  cls: ExperimentSubject;
  classNum: number;
}

const ExperimentClass: FC<Props> = ({ cls, classNum }): ReactElement => {
  const { created_at, deadline, description } = cls;

  const getFullTime = (time: number) => {
    const c = new Date(time);
    return `${c.getFullYear()}.${c.getMonth() + 1}.${c.getDate()}`;
  };

  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{classNum}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{description}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>
            {getFullTime(created_at)} - {getFullTime(deadline)}
          </S.SubjectClsContentHeadTime>
        </S.SubjectClsContentHead>
        <S.SubjectClsContent>
          <ExperimentClassInfo cls={cls} />
          <ExperimentClassReport cls={cls} />
          <ExperimentClassSubmit members={cls.peer_evaluation_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default ExperimentClass;
