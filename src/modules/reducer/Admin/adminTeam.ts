import { SubjectCommon, PrEvalCommon, MemberCommon } from './admin';

export interface Team {
  team_assignment?: TeamSubject[];
}
export interface TeamSubject extends SubjectCommon {
  peer_evaluation_submit: PrEvalCommon[];
  team_submit: PeerEvaluationSubmitTeamSubmit[];
}
export interface PeerEvaluationSubmitTeamSubmit {
  team_name: string;
  submit: number;
  member: MemberCommon[];
}

export const dummyTeam1: Team = {
  team_assignment: [
    {
      id: 4,
      title: '정우영의 전구공장4',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: '정우영의 전구공장2',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
  ],
};

export const dummyTeam2: Team = {
  team_assignment: [
    {
      id: 4,
      title: '정우영의 전구공장4',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: '정우영의 전구공장2',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
  ],
};

export const dummyTeam3: Team = {
  team_assignment: [
    {
      id: 4,
      title: '정우영의 전구공장4',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: '정우영의 전구공장2',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
  ],
};

export const dummyTeam4: Team = {
  team_assignment: [
    {
      id: 4,
      title: '정우영의 전구공장4',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: '정우영의 전구공장2',
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
      team_submit: [
        {
          team_name: '앙김어眞',
          submit: 0,
          member: [
            {
              name: '오준상',
              student_id: '1101',
            },
            {
              name: '김어진',
              student_id: '1102',
            },
          ],
        },
        {
          team_name: '전구영팀',
          submit: 1,
          member: [
            {
              name: '정우형',
              student_id: '1103',
            },
            {
              name: '정우영',
              student_id: '1104',
            },
          ],
        },
      ],
    },
  ],
};
