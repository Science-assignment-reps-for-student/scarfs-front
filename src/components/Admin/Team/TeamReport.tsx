import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';

interface Props {
  subject: TeamSubject;
}

const TeamClassReport: FC<Props> = ({ subject }): ReactElement => {
  const { team_submit } = subject;

  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {team_submit.map(team => {
          return team.member.map(({ name, student_number }, i) => {
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
