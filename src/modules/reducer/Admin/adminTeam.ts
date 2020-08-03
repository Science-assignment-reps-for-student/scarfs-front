import { SubjectCommon, TeamsInfoCommon, PrEvalCommon } from './';

export interface Team {
  team_assignment?: TeamSubject[];
}
export interface TeamSubject extends SubjectCommon {
  peer_evaluation_submit: PrEvalCommon[];
  teams_info: TeamsInfoCommon[];
}

export const dummyTeam1: Team = {
  team_assignment: Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        id: 4 + i,
        title: '정우영의 전구공장4',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1106',
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
            team_id: 1,
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
            team_id: 2,
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

export const dummyTeam2: Team = {
  team_assignment: Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        id: 4 + i,
        title: '정우영의 전구공장4',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1106',
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
            team_id: 1,
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
            team_id: 2,
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

export const dummyTeam3: Team = {
  team_assignment: Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        id: 4 + i,
        title: '정우영의 전구공장4',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1106',
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
            team_id: 1,
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
            team_id: 2,
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

export const dummyTeam4: Team = {
  team_assignment: Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        id: 4 + i,
        title: '정우영의 전구공장4',
        description: 'description of homework',
        created_at: new Date().getTime() - 3600,
        deadline: new Date().getTime() + 3600,
        peer_evaluation_submit: [
          {
            name: '오준상',
            student_number: '1106',
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
            team_id: 1,
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
            team_id: 2,
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
