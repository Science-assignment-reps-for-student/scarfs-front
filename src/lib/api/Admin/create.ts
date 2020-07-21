import { apiDefault } from '../client';
import axios from 'axios';

const apiCreateDefault = axios.create({
  baseURL: 'https://dsm-scarfs.hs.kr/v2',
  headers: {
    Authorization: localStorage.getItem('accessToken'),
    'Content-Type': 'multipart/form-data',
  },
});

export const apiCreateHomework = (data: FormData) => {
  return apiCreateDefault.post('/rib-eye/homework', data);
};
