import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ReportList from '../ReportList';
import ClassListHeadCommon from '../ListCommonHead';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';

interface Props {
  cls: TeamSubject;
}

const TeamClassReport: FC<Props> = ({ cls }): ReactElement => {
  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {cls.team_submit.map(team => {
          return team.member.map(({ name, student_number: student_id }, j) => {
            return (
              <ReportList
                key={j}
                j={j}
                isPersonal={true}
                name={name}
                studentId={student_id}
                submit={team.submit}
                teamName={j === 0 ? team.team_name : ''}
              />
            );
          });
        })}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default TeamClassReport;
