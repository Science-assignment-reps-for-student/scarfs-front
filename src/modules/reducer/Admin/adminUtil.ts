import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './admin';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

export const sortPersonalById = (list: Personal) => {
  const copy = { ...list };
  copy.personal_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};
export const sortTeamById = (list: Team) => {
  const copy = { ...list };
  copy.team_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};
export const sortExperimentById = (list: Experiment) => {
  const copy = { ...list };
  copy.experiment_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};

export const addPropsOfPersonal = (list: Personal) => {
  const copy = { ...list };
  copy.personal_assignment.map((item, i) => {
    return {
      ...item,
      title: `[${PERSONAL_STR}] ${item.title}`,
      type: PERSONAL_STR,
      classNum: i++,
    };
  });
  return copy;
};
export const addPropsOfTeam = (list: Team) => {
  const copy = { ...list };
  copy.team_assignment.map((item, i) => {
    return {
      ...item,
      title: `[${TEAM_STR}] ${item.title}`,
      type: TEAM_STR,
      classNum: i++,
    };
  });
  return copy;
};
export const addPropsOfExperiment = (list: Experiment) => {
  const copy = { ...list };
  copy.experiment_assignment.map((item, i) => {
    return {
      ...item,
      title: `[${EXPERIMENT_STR}] ${item.title}`,
      type: EXPERIMENT_STR,
      classNum: i++,
    };
  });
  return copy;
};
