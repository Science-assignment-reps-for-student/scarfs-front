import { SubjectCommon, PrEvalCommon, TeamsInfoCommon } from './';

export interface Experiment {
  experiment_assignment?: ExperimentSubject[];
}
export interface ExperimentSubject extends SubjectCommon {
  peer_evaluation_submit: PrEvalCommon[];
  teams_info: TeamsInfoCommon[];
}

export const dummyExperiment1: Experiment = {
  experiment_assignment: Array(3)
    .fill(0)
    .map(() => {
      return {
        id: 7,
        title: '정우영의 전구공장6',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1101',
            submit: 0,
          },
          {
            name: '김어진',
            student_number: '1102',
            submit: 1,
          },
        ],
        teams_info: [
          {
            team_id: 10,
            team_name: '앙김어眞',
            submit: 0,
            members: [
              {
                name: '오준상',
                student_number: '1101',
              },
              {
                name: '김어진',
                student_number: '1102',
              },
            ],
          },
          {
            team_id: 11,
            team_name: '전구영팀',
            submit: 1,
            members: [
              {
                name: '정우형',
                student_number: '1103',
              },
              {
                name: '정우영',
                student_number: '1104',
              },
            ],
          },
        ],
      };
    }),
};

export const dummyExperiment2: Experiment = {
  experiment_assignment: Array(3)
    .fill(0)
    .map(() => {
      return {
        id: 7,
        title: '정우영의 전구공장6',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1101',
            submit: 0,
          },
          {
            name: '김어진',
            student_number: '1102',
            submit: 1,
          },
        ],
        teams_info: [
          {
            team_id: 10,
            team_name: '앙김어眞',
            submit: 0,
            members: [
              {
                name: '오준상',
                student_number: '1101',
              },
              {
                name: '김어진',
                student_number: '1102',
              },
            ],
          },
          {
            team_id: 11,
            team_name: '전구영팀',
            submit: 1,
            members: [
              {
                name: '정우형',
                student_number: '1103',
              },
              {
                name: '정우영',
                student_number: '1104',
              },
            ],
          },
        ],
      };
    }),
};

export const dummyExperiment3: Experiment = {
  experiment_assignment: Array(3)
    .fill(0)
    .map(() => {
      return {
        id: 7,
        title: '정우영의 전구공장6',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1101',
            submit: 0,
          },
          {
            name: '김어진',
            student_number: '1102',
            submit: 1,
          },
        ],
        teams_info: [
          {
            team_id: 10,
            team_name: '앙김어眞',
            submit: 0,
            members: [
              {
                name: '오준상',
                student_number: '1101',
              },
              {
                name: '김어진',
                student_number: '1102',
              },
            ],
          },
          {
            team_id: 11,
            team_name: '전구영팀',
            submit: 1,
            members: [
              {
                name: '정우형',
                student_number: '1103',
              },
              {
                name: '정우영',
                student_number: '1104',
              },
            ],
          },
        ],
      };
    }),
};

export const dummyExperiment4: Experiment = {
  experiment_assignment: Array(3)
    .fill(0)
    .map(() => {
      return {
        id: 7,
        title: '정우영의 전구공장6',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1101',
            submit: 0,
          },
          {
            name: '김어진',
            student_number: '1102',
            submit: 1,
          },
        ],
        teams_info: [
          {
            team_id: 10,
            team_name: '앙김어眞',
            submit: 0,
            members: [
              {
                name: '오준상',
                student_number: '1101',
              },
              {
                name: '김어진',
                student_number: '1102',
              },
            ],
          },
          {
            team_id: 11,
            team_name: '전구영팀',
            submit: 1,
            members: [
              {
                name: '정우형',
                student_number: '1103',
              },
              {
                name: '정우영',
                student_number: '1104',
              },
            ],
          },
        ],
      };
    }),
};
