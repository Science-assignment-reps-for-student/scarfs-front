import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

export const sortPersonal = ({ ...personal }: Personal): Personal => {
  personal.personal_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  personal.personal_assignment.forEach(per => {
    per.class_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
  });
  return personal;
};
export const sortTeam = ({ ...team }: Team): Team => {
  team.team_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  team.team_assignment.forEach(team => {
    team.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    team.teams_info.sort((a, b) => (a.team_id > b.team_id ? 1 : -1));
  });
  return team;
};
export const sortExperiment = ({ ...experiment }: Experiment): Experiment => {
  experiment.experiment_assignment.sort((a, b) => (a.id > b.id ? 1 : -1));
  experiment.experiment_assignment.forEach(exp => {
    exp.peer_evaluation_submit.sort((a, b) => (a.student_number > b.student_number ? 1 : -1));
    exp.teams_info.sort((a, b) => (a.team_id > b.team_id ? 1 : -1));
  });
  return experiment;
};

export const addPropsOfPersonal = ({ ...personal }: Personal): Personal => {
  personal.personal_assignment.forEach(cls => {
    cls.title = `[${PERSONAL_STR}] ${cls.title}`;
    cls.typing = PERSONAL_STR;
  });
  return personal;
};
export const addPropsOfTeam = ({ ...team }: Team): Team => {
  team.team_assignment.forEach(cls => {
    cls.title = `[${TEAM_STR}] ${cls.title}`;
    cls.typing = TEAM_STR;
  });
  return team;
};
export const addPropsOfExperiment = ({ ...experiment }: Experiment): Experiment => {
  experiment.experiment_assignment.forEach(cls => {
    cls.title = `[${EXPERIMENT_STR}] ${cls.title}`;
    cls.typing = EXPERIMENT_STR;
  });
  return experiment;
};

export const networkError: Personal[] = [
  {
    personal_assignment: [
      {
        id: 1,
        title: '네트워크 상태를 확인해주세요.',
        description: '네트워크 상태를 확인해주세요.',
        created_at: new Date().getTime(),
        deadline: new Date().getTime(),
        class_submit: [],
        typing: '개인',
      },
    ],
  },
];
