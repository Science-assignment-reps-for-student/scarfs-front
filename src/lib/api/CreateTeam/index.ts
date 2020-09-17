import { getApiDefault } from '../client';

export const createTeam = ({
  assignment_id,
  team_name,
}: {
  assignment_id: number;
  team_name: string;
}) =>
  getApiDefault().post('/shank/team', {
    assignment_id,
    team_name,
  });
