import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { ExperimentSubject } from 'src/modules/reducer/Admin/adminExperiment';

interface Props {
  cls: ExperimentSubject;
}

const ExperimentClassReport: FC<Props> = ({ cls }): ReactElement => {
  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {cls.experiment_submit.map(experiment => {
          return experiment.member.map((member, j) => {
            return (
              <ReportList
                key={j}
                j={j}
                isPersonal={true}
                name={member.name}
                studentId={member.student_number}
                submit={experiment.submit}
                teamName={j === 0 ? experiment.team_name : ''}
              />
            );
          });
        })}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default ExperimentClassReport;
