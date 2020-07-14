import React, { FC, ReactElement, useEffect } from 'react';
import * as S from './style';
import Subject from './Subject';
import { CombineAdminSubjects } from '../../modules/reducer/Admin/admin';
import { Personal, PersonalSubject } from '../../modules/reducer/Admin/adminPersonal';
import { Team, TeamSubject } from '../../modules/reducer/Admin/adminTeam';
import { Experiment, ExperimentSubject } from '../../modules/reducer/Admin/adminExperiment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules/reducer/Admin';

interface Props {}

interface ISubject extends CombineAdminSubjects {
  type?: string;
}

const AdminSection: FC<Props> = (): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );

  const sortAllList = (
    { personal_assignment = [] }: Personal,
    { team_assignment = [] }: Team,
    { experiment_assignment = [] }: Experiment,
  ): ISubject =>
    [...personal_assignment, ...team_assignment, ...experiment_assignment].sort((a, b) =>
      a.id > b.id ? 1 : -1,
    );

  return (
    <S.AdminSection>
      {loading ? (
        <div>기다리세여!</div>
      ) : (
        sortAllList(personalList, teamList, experimentList).map(item => {
          const { id, title } = item;
          console.log(item);
          return <Subject key={id} subject={title} onlyPersonal={false} />;
        })
      )}
    </S.AdminSection>
  );
};

export default AdminSection;
