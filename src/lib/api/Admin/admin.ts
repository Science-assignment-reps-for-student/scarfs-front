import axios from 'axios';
import { apiDefault } from '../client';

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
