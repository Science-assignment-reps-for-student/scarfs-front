import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { ExperimentSubject } from 'src/modules/reducer/Admin/adminExperiment';

interface Props {
  subject: ExperimentSubject;
}

const ExperimentClassReport: FC<Props> = ({ subject }): ReactElement => {
  const { experiment_submit } = subject;

  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {experiment_submit.map(subject => {
          return subject.member.map(({ name, student_number }, i) => {
            return (
              <ReportList
                key={student_number}
                isPersonal={true}
                name={name}
                studentId={student_number}
                submit={subject.submit}
                teamName={i === 0 ? subject.team_name : ''}
              />
            );
          });
        })}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default ExperimentClassReport;
