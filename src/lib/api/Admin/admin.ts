import axios from 'axios';

const BASE_URL = 'https://{base_url}' as const;
const apiDefault = axios.create({
  baseURL: BASE_URL,
  timeout: 2500,
  headers: { Authorization: localStorage.getItem('accessToken') },
});

export const fetchPersonalAssignment = () => {
  return apiDefault.get('/tenderloin/admin/personal-assignment');
};
export const fetchTeamAssignment = () => {
  return apiDefault.get('/tenderloin/admin/team-assignment');
};
export const fetchExperimentAssignment = () => {
  return apiDefault.get('/tenderloin/admin/experiment-assignment');
};

export const apiLogin = ({ ID, PW }: { ID: string; PW: string; type: string }) => {
  return axios.post('/tenderloin/admin/auth', {
    email: ID,
    password: PW,
  });
};
