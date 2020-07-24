import axios from 'axios';

export const apiDefault = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});
