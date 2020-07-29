import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { ExperimentSubject } from '../../../../modules/reducer/Admin/adminExperiment';

interface Props {
  subject: ExperimentSubject;
}

const ExperimentClassReport: FC<Props> = ({ subject }): ReactElement => {
  const { teams_info } = subject;

  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {teams_info.length !== 0 &&
          teams_info.map(subject => {
            return subject.members.map(({ name, student_number }, i) => {
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
