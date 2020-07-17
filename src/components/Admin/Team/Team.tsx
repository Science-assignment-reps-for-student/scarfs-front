import React, { FC, ReactElement, useMemo } from 'react';
import * as S from '../style';
import TeamClassInfo from './TeamInfo';
import TeamClassSubmit from './TeamSubmit';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';
import TeamClassReport from './TeamReport';
import WithClass from '../WithClass';
import { getFullTime } from '../../../lib/function/admin';

interface Props {
  subject: TeamSubject;
  classNum: number;
}

const TeamClass: FC<Props> = ({ subject, classNum }): ReactElement => {
  const { created_at, deadline, description, peer_evaluation_submit } = subject;

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
          <TeamClassInfo subject={subject} />
          <TeamClassReport subject={subject} />
          <TeamClassSubmit members={peer_evaluation_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(TeamClass);
