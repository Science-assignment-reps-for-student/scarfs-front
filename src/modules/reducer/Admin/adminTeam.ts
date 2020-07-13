export interface Team {
  team_assignment?: TeamSubject[];
}

export interface TeamSubject {
  id: number;
  title: string;
  description: string;
  created_at: number;
  deadline: number;
  peer_evaluation_submit: PeerEvaluationSubmit[];
  team_submit: PeerEvaluationSubmitTeamSubmit[];
}

export interface PeerEvaluationSubmit {
  name: string;
  student_id: string;
  submit: number;
}

export interface PeerEvaluationSubmitTeamSubmit {
  team_name: string;
  submit: number;
  member: TeamMember[];
}

export interface TeamMember {
  name: string;
  student_id: string;
}

export const dummyTeam: Team = {
  team_assignment: [
    {
      id: 3,
      title: '정우영의 전구공장',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      peer_evaluation_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
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
