import React, { FC, ReactElement, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import * as S from './style';

import SkeletonAdmin from './SkeletonAdmin';
import { WithPersonalSubject, WithExperimentSubject, WithTeamSubject } from './WithSubject';

import { reducerType } from '../../../modules/reducer';
import {
  CombineAdminSubjects,
  CombineAdminSubject,
  PERSONAL_STR,
  TEAM_STR,
  EXPERIMENT_STR,
} from '../../../modules/reducer/Admin';
import { Team } from '../../../modules/reducer/Admin/adminTeam';
import { Personal } from '../../../modules/reducer/Admin/adminPersonal';
import { Experiment } from '../../../modules/reducer/Admin/adminExperiment';

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

const AdminSection: FC<Props> = ({ filter }): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: reducerType) => state.Admin,
  );

  const pushSubjectToCombineSubject = (
    combineSubject: CombineResult[],
    assignment: CombineAdminSubject,
  ) => {
    const rrIdx = combineSubject.findIndex(a => a.id === assignment.id);
    rrIdx === -1
      ? combineSubject.push({ id: assignment.id, classes: [assignment] })
      : combineSubject[rrIdx].classes.push(assignment);
  };

  const sortSubjects = ([...copy]: CombineResult[]) => copy.sort((a, b) => (a.id < b.id ? 1 : -1));

  const combineSubjects = useCallback(
    (personal: Personal[] = [], team: Team[] = [], experiment: Experiment[] = []) => {
      const combineSubject: CombineResult[] = [];
      [...personal, ...team, ...experiment].forEach(subject => {
        subject[Object.keys(subject)[0]].forEach((assignment: CombineAdminSubject) => {
          pushSubjectToCombineSubject(combineSubject, assignment);
        });
      });
      return sortSubjects(combineSubject);
    },
    [pushSubjectToCombineSubject, sortSubjects],
  );

  const switchSubject = (subject: CombineResult) => {
    switch (subject.classes[0].typing) {
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

  return <S.AdminSection>{loading ? <SkeletonAdmin /> : renderAllSubjects}</S.AdminSection>;
};

export default React.memo(AdminSection);
