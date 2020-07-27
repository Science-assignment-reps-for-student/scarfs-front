import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

export const sortPersonal = ({ personal_assignment }: Personal) => {
  personal_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  personal_assignment.forEach(per => {
    per.class_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
  });
};
export const sortTeam = ({ team_assignment }: Team) => {
  team_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  team_assignment.forEach(team => {
    team.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    team.teams_info.sort((a, b) => (a.team_id > b.team_id ? 1 : -1));
  });
};
export const sortExperiment = ({ experiment_assignment }: Experiment) => {
  experiment_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  experiment_assignment.forEach(exp => {
    exp.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    exp.teams_info.sort((a, b) => (a.team_id > b.team_id ? 1 : -1));
  });
};

export const addPropsOfPersonal = ({ personal_assignment }: Personal) => {
  personal_assignment.forEach(cls => {
    cls.title = `[${PERSONAL_STR}] ${cls.title}`;
    cls.typing = PERSONAL_STR;
  });
};
export const addPropsOfTeam = ({ team_assignment }: Team) => {
  team_assignment.forEach(cls => {
    cls.title = `[${TEAM_STR}] ${cls.title}`;
    cls.typing = TEAM_STR;
  });
};
export const addPropsOfExperiment = ({ experiment_assignment }: Experiment) => {
  experiment_assignment.forEach(cls => {
    cls.title = `[${EXPERIMENT_STR}] ${cls.title}`;
    cls.typing = EXPERIMENT_STR;
  });
};
