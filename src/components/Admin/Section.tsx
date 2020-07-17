import React, { FC, ReactElement, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';
import Subject from './Subject';
import {
  CombineAdminSubjects,
  CombineAdminSubject,
  PERSONAL_STR,
  TEAM_STR,
  EXPERIMENT_STR,
} from '../../modules/reducer/Admin/admin';
import { Personal, PersonalSubject } from '../../modules/reducer/Admin/adminPersonal';
import { Team, TeamSubject } from '../../modules/reducer/Admin/adminTeam';
import { Experiment, ExperimentSubject } from '../../modules/reducer/Admin/adminExperiment';
import { StoreState } from '../../modules/reducer/Admin';
import PersonalClass from './Personal/Personal';
import TeamClass from './Team/Team';
import ExperimentClass from './Experiment/Experiment';
import { WithPersonalSubject, WithExperimentSubject, WithTeamSubject } from './WithSubject';

interface Props {
  filter: Filter;
}
interface Filter {
  class1: boolean;
  class2: boolean;
  class3: boolean;
  class4: boolean;
  personal: boolean;
  team: boolean;
  experiment: boolean;
}
interface CombineResult {
  id: number;
  classes: CombineAdminSubjects;
}
interface ITest {
  key: any;
  filter: Filter;
  i: number;
  classNum: number;
  cls: any;
}

const withSectionComponent = (MyComponent: FC<any>) => (props: ITest) => {
  const { filter, i } = props;
  return filter[`class${i + 1}`] && <MyComponent {...props} />;
};

const AdminSection: FC<Props> = ({ filter }): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );

  console.log('Section');

  const pushToResult = (result: CombineResult[], rr: CombineAdminSubject) => {
    const rrIdx = result.findIndex(a => a.id === rr.id);
    rrIdx === -1 ? result.push({ id: rr.id, classes: [rr] }) : result[rrIdx].classes.push(rr);
  };

  const sortSubjects = ([...copy]: CombineResult[]) => copy.sort((a, b) => (a.id > b.id ? 1 : -1));

  const combineSubjects = useCallback(
    (personal: Personal[] = [], team: Team[] = [], experiment: Experiment[] = []) => {
      const result: CombineResult[] = [];
      [...personal, ...team, ...experiment].forEach(cls => {
        cls[Object.keys(cls)[0]].forEach((sbj: CombineAdminSubject) => {
          pushToResult(result, sbj);
        });
      });
      return sortSubjects(result);
    },
    [pushToResult, sortSubjects],
  );

  const switchSubject = (subject: CombineResult) => {
    switch (subject.classes[0].type) {
      case PERSONAL_STR:
        return (
          filter.personal && (
            <WithPersonalSubject key={subject.id} filter={filter} subject={subject} />
          )
        );
      case TEAM_STR:
        return (
          filter.team && <WithTeamSubject key={subject.id} filter={filter} subject={subject} />
        );
      case EXPERIMENT_STR:
        return (
          filter.experiment && (
            <WithExperimentSubject key={subject.id} filter={filter} subject={subject} />
          )
        );
      default:
        return null;
    }
  };

  const renderAllSubjects = useMemo(
    () => combineSubjects(personalList, teamList, experimentList).map(switchSubject),
    [combineSubjects, personalList, teamList, experimentList, filter],
  );

  return <S.AdminSection>{loading ? <div>Loading~</div> : renderAllSubjects}</S.AdminSection>;
};

export default React.memo(AdminSection);
