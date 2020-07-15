import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './admin';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

export const sortPersonalById = (personal: Personal) => {
  const copy = { ...personal };
  copy.personal_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};
export const sortTeamById = (team: Team) => {
  const copy = { ...team };
  copy.team_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};
export const sortExperimentById = (experiment: Experiment) => {
  const copy = { ...experiment };
  copy.experiment_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  return copy;
};

export const addPropsOfPersonal = (personal: Personal) => {
  const copy = { ...personal };
  copy.personal_assignment.forEach(cls => {
    cls.title = `[${PERSONAL_STR}] ${cls.title}`;
  });
  return copy;
};
export const addPropsOfTeam = (team: Team) => {
  const copy = { ...team };
  copy.team_assignment.forEach(cls => {
    cls.title = `[${TEAM_STR}] ${cls.title}`;
  });
  return copy;
};
export const addPropsOfExperiment = (experiment: Experiment) => {
  const copy = { ...experiment };
  copy.experiment_assignment.forEach(cls => {
    cls.title = `[${EXPERIMENT_STR}] ${cls.title}`;
  });
  return copy;
};
