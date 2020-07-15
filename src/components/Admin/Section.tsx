import React, { FC, ReactElement, useCallback } from 'react';
import * as S from './style';
import Subject from './Subject';
import Class from './Class';
import { CombineAdminSubjects, CombineAdminSubject } from '../../modules/reducer/Admin/admin';
import { Personal } from '../../modules/reducer/Admin/adminPersonal';
import { Team } from '../../modules/reducer/Admin/adminTeam';
import { Experiment } from '../../modules/reducer/Admin/adminExperiment';
import { useSelector } from 'react-redux';
import { StoreState } from '../../modules/reducer/Admin';

interface Props {}
interface CombineResult {
  id: number;
  classes: CombineAdminSubjects;
}
const AdminSection: FC<Props> = (): ReactElement => {
  const { personalList, teamList, experimentList, loading } = useSelector(
    (state: StoreState) => state.admin,
  );

  console.log(1);

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

  const renderAllSubjects = () => {
    const allSubjects = combineSubjects(personalList, teamList, experimentList);
    return allSubjects.map(subject => {
      return (
        <Subject key={subject.id} subject={subject.classes[0].title}>
          {subject.classes.map((cls, i) => {
            return <Class key={i} classNum={i + 1} cls={cls} />;
          })}
        </Subject>
      );
    });
  };

  return <S.AdminSection>{loading ? <div>Loading~</div> : renderAllSubjects()}</S.AdminSection>;
};

export default React.memo(AdminSection);
