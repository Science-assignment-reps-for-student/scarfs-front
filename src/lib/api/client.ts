import axios from 'axios';

export const apiDefault = axios.create({
  baseURL: process.env.TEST_BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const getApiDefault = () => {
  return axios.create({
    baseURL: process.env.TEST_BASE_URL,
    timeout: 2500,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};
