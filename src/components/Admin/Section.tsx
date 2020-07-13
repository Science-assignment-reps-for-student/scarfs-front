import React, { FC, ReactElement, useEffect } from 'react';
import * as S from './style';
import Subject from './Subject';
import { Personal, PersonalSubject } from '../../modules/reducer/Admin/adminPersonal';
import { Team, TeamSubject } from '../../modules/reducer/Admin/adminTeam';
import { Experiment, ExperimentSubject } from '../../modules/reducer/Admin/adminExperiment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules/reducer/Admin';

interface Props {}

interface ISubject {
  subject: string;
  onlyPersonal: boolean;
}

type CombinePersonalTeam = (PersonalSubject | TeamSubject | ExperimentSubject)[];

const AdminSection: FC<Props> = (): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );
  const subjectList: ISubject[] = [
    {
      subject: '[개인] 정우영의 전구공장',
      onlyPersonal: false,
    },
    {
      subject: '[팀] 정우영의 전구공장',
      onlyPersonal: true,
    },
    {
      subject: '[실험] 정우영의 전구공장',
      onlyPersonal: true,
    },
  ];

  const sortAllList = (
    { personal_assignment = [] }: Personal,
    { team_assignment = [] }: Team,
    { experiment_assignment = [] }: Experiment,
  ): CombinePersonalTeam => {
    const spreadArr = [...personal_assignment, ...team_assignment, ...experiment_assignment];
    return spreadArr.sort((a, b) => (a.id > b.id ? 1 : -1));
  };

  return (
    <S.AdminSection>
      {sortAllList(personalList, teamList, experimentList).map(data => {
        return <Subject key={data.id} subject={data.title} onlyPersonal={false} />;
      })}
      {subjectList.map(({ subject, onlyPersonal }, i: number) => {
        return <Subject key={i} subject={subject} onlyPersonal={onlyPersonal} />;
      })}
    </S.AdminSection>
  );
};

export default AdminSection;
