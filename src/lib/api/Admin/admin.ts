import axios from 'axios';
import { apiDefault } from '../client';

const TEST_BASE_URL = 'http://10.156.145.110:5000' as const;
const apiTestDefault = axios.create({
  baseURL: TEST_BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const fetchPersonalAssignment = (classNum: number) => {
  return apiTestDefault.get(`/admin/personal-assignment?class=${classNum}`);
  // return apiDefault.get('/tenderloin/admin/personal-assignment');
};
export const fetchTeamAssignment = (classNum: number) => {
  return apiTestDefault.get(`/admin/team-assignment?class=${classNum}`);
  // return apiDefault.get('/tenderloin/admin/team-assignment');
};
export const fetchExperimentAssignment = (classNum: number) => {
  return apiTestDefault.get(`/admin/experiment-assignment?class=${classNum}`);
  // return apiDefault.get('/tenderloin/admin/experiment-assignment');
};

export const apiLogin = ({ ID, PW }: { ID: string; PW: string; type: string }) => {
  return apiTestDefault.post(`/admin/auth`, {
    email: ID,
    password: PW,
  });
  // return axios.post('/tenderloin/admin/auth', {
  //   email: ID,
  //   password: PW,
  // });
};
