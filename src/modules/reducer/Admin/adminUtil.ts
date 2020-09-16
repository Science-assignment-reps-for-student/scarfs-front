import { PERSONAL_STR, TEAM_STR, EXPERIMENT_STR } from './';
import { Personal } from './adminPersonal';
import { Team } from './adminTeam';
import { Experiment } from './adminExperiment';

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
