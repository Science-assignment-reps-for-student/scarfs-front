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
        <ClassListHeadCommon isReport={true} />
        {teams_info.length !== 0 &&
          teams_info
            .sort((a, b) => (a.team_id > b.team_id ? 1 : -1))
            .map(({ members, team_name, submit }) =>
              members
                .sort((a, b) => (a.student_number > b.student_number ? 1 : -1))
                .map(({ name, student_number }, i) => (
                  <ReportList
                    key={student_number}
                    isPersonal={true}
                    name={name}
                    studentId={student_number}
                    submit={submit}
                    teamName={i === 0 ? team_name : ''}
                  />
                )),
            )}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default ExperimentClassReport;
