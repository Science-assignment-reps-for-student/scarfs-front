import React, { FC, ReactElement, useCallback, useMemo } from 'react';
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
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules/reducer/Admin';
import PersonalClass from './Personal/PersonalClass';
import TeamClass from './Team/TeamClass';
import ExperimentClass from './Experiment/ExperimentClass';

interface Props {}
interface CombineResult {
  id: number;
  classes: CombineAdminSubjects;
}
const AdminSection: FC<Props> = (): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );

  const pushToResult = (result: CombineResult[], rr: CombineAdminSubject) => {
    const rrIdx = result.findIndex(a => a.id === rr.id);
    rrIdx === -1 ? result.push({ id: rr.id, classes: [rr] }) : result[rrIdx].classes.push(rr);
  };

  const sortSubjects = ([...copy]: CombineResult[]) => copy.sort((a, b) => (a.id > b.id ? 1 : -1));

  const combineSubjects = useCallback(
    (personal: Personal[], team: Team[], experimentList: Experiment[]) => {
      const result: CombineResult[] = [];
      for (let i = 0; i < personal.length; i++) {
        const p = personal[i].personal_assignment,
          t = team[i].team_assignment,
          e = experimentList[i].experiment_assignment;
        const len = p.length;
        for (let j = 0; j < len; j++) {
          pushToResult(result, p[j]);
          pushToResult(result, t[j]);
          pushToResult(result, e[j]);
        }
      }
      return sortSubjects(result);
    },
    [],
  );

  const switchSubject = (subject: CombineResult) => {
    switch (subject.classes[0].type) {
      case PERSONAL_STR:
        return subject.classes.map((cls: PersonalSubject, i) => (
          <PersonalClass key={i} classNum={i + 1} cls={cls} />
        ));
      case TEAM_STR:
        return subject.classes.map((cls: TeamSubject, i) => (
          <TeamClass key={i} classNum={i + 1} cls={cls} />
        ));
      case EXPERIMENT_STR:
        return subject.classes.map((cls: ExperimentSubject, i) => (
          <ExperimentClass key={i} classNum={i + 1} cls={cls} />
        ));
      default:
        return null;
    }
  };

  const renderAllSubjects = useMemo(
    () =>
      combineSubjects(personalList, teamList, experimentList).map(subject => (
        <Subject key={subject.id} title={subject.classes[0].title}>
          {switchSubject(subject)}
        </Subject>
      )),
    [combineSubjects, personalList, teamList, experimentList],
  );

  return <S.AdminSection>{loading ? <div>Loading~</div> : renderAllSubjects}</S.AdminSection>;
};

export default React.memo(AdminSection);
