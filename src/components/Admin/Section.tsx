import React, { FC, ReactElement } from 'react';
import * as S from './style';
import Subject from './Subject';
import { CombineAdminSubjects } from '../../modules/reducer/Admin/admin';
import { Personal } from '../../modules/reducer/Admin/adminPersonal';
import { Team } from '../../modules/reducer/Admin/adminTeam';
import { Experiment } from '../../modules/reducer/Admin/adminExperiment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules/reducer/Admin';

interface Props {}

interface ISubject extends CombineAdminSubjects {
  type?: string;
  title?: string;
  classNum?: number;
}

const AdminSection: FC<Props> = (): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );

  const combineSortAllList = (
    { personal_assignment = [] }: Personal,
    { team_assignment = [] }: Team,
    { experiment_assignment = [] }: Experiment,
  ): ISubject =>
    [...personal_assignment, ...team_assignment, ...experiment_assignment].sort((a, b) =>
      a.id > b.id ? 1 : -1,
    );

  const combineSortAllList2 = (personal: Personal[], team: Team[]) => {
    let result = [];
    let add = [];

    for (let i = 0; i < personal.length; i++) {
      const one = personal[i].personal_assignment;
      for (let j = 0; j < personal[i].personal_assignment.length; j++) {
        const two = one[j];
        console.log(two);
      }
    }
  };

  return (
    <S.AdminSection>
      {/* {loading ? (
        <div>기다리세여!</div>
      ) : (
        combineSortAllList(personalList, teamList, experimentList).map(item => {
          const { id, title } = item;
          return <Subject key={id} subject={title} onlyPersonal={false} />;
        })
      )} */}
      {console.log(personalList, teamList)}
      {combineSortAllList2(personalList, teamList)}

      <Subject onlyPersonal={true} subject={'title'} />
    </S.AdminSection>
  );
};

export default AdminSection;
