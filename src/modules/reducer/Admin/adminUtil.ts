import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

export const sortPersonal = (personal: Personal) => {
  personal.personal_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  personal.personal_assignment.forEach(per => {
    per.class_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
  });
};
export const sortTeam = (team: Team) => {
  team.team_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  team.team_assignment.forEach(team => {
    team.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    team.team_submit.sort((a, b) => (a.team_name > b.team_name ? 1 : -1));
  });
};
export const sortExperiment = (experiment: Experiment) => {
  experiment.experiment_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  experiment.experiment_assignment.forEach(exp => {
    exp.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    exp.experiment_submit.sort((a, b) => (a.team_name > b.team_name ? 1 : -1));
  });
};

export const addPropsOfPersonal = (personal: Personal) => {
  personal.personal_assignment.forEach(cls => {
    cls.title = `[${PERSONAL_STR}] ${cls.title}`;
    cls.typing = PERSONAL_STR;
  });
};
export const addPropsOfTeam = (team: Team) => {
  team.team_assignment.forEach(cls => {
    cls.title = `[${TEAM_STR}] ${cls.title}`;
    cls.typing = TEAM_STR;
  });
};
export const addPropsOfExperiment = (experiment: Experiment) => {
  experiment.experiment_assignment.forEach(cls => {
    cls.title = `[${EXPERIMENT_STR}] ${cls.title}`;
    cls.typing = EXPERIMENT_STR;
  });
};
