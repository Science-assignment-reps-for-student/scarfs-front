import axios from 'axios';

const BASE_URL = 'https://{base_url}' as const;

export const apiDefault = axios.create({
  baseURL: BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: localStorage.getItem('accessToken'),
    'Content-Type': 'application/json',
  },
});
