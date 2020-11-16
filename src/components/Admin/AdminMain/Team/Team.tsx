import React, { FC, ReactElement } from 'react';

import TeamClassInfo from './TeamInfo';
import TeamClassSubmit from './TeamSubmit';
import TeamClassReport from './TeamReport';

import * as S from '../style';
import WithClass from '../WithClass';
import { TeamSubject } from '../../../../modules/reducer/Admin/adminTeam';
import { getDeadline } from '../../../../lib/function/admin';

interface Props {
  subject: TeamSubject;
  classNum: number;
}

const TeamClass: FC<Props> = ({ subject, classNum }): ReactElement => {
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
          <TeamClassInfo subject={subject} />
          <TeamClassReport subject={subject} />
          <TeamClassSubmit subject={subject} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(TeamClass);
