import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { TeamSubject } from '../../../../modules/reducer/Admin/adminTeam';

interface Props {
  subject: TeamSubject;
}

const TeamClassReport: FC<Props> = ({ subject }): ReactElement => {
  const { teams_info } = subject;

  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isReport={true} />
        {teams_info.length !== 0 &&
          teams_info.map(team => {
            return team.members.map(({ name, student_number }, i) => {
              return (
                <ReportList
                  key={student_number}
                  isPersonal={true}
                  name={name}
                  studentId={student_number}
                  submit={team.submit}
                  teamName={i === 0 ? team.team_name : ''}
                />
              );
            });
          })}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default TeamClassReport;
