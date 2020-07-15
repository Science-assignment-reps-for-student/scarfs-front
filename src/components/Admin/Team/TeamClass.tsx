import React, { FC, ReactElement, useMemo } from 'react';
import * as S from '../style';
import TeamClassInfo from './TeamClassInfo';
import TeamClassSubmit from './TeamClassSubmit';
import { TeamSubject } from 'src/modules/reducer/Admin/adminTeam';
import TeamClassReport from './TeamClassReport';

interface Props {
  cls: TeamSubject;
  classNum: number;
}

const TeamClass: FC<Props> = ({ cls, classNum }): ReactElement => {
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
          <TeamClassInfo cls={cls} />
          <TeamClassReport />
          <TeamClassSubmit members={cls.peer_evaluation_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default TeamClass;
