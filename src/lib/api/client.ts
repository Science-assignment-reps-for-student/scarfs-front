import axios from 'axios';

const BASE_URL = 'https://dsm-scarfs.hs.kr/v2' as const;

export const apiDefault = axios.create({
  baseURL: BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: localStorage.getItem('accessToken'),
    'Content-Type': 'application/json',
  },
});
