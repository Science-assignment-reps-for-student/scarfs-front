import axios from 'axios';

const isTextHaveKorean = (text: string): boolean => {
  const rxg = /[ㄱ-ㅎ]|[ㅏ-ㅣ]|[가-힣]/;
  return rxg.test(text);
};

export const apiDefault = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2500,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
});

export const getApiDefault = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (isTextHaveKorean(accessToken)) window.location.href = '/error';
  return axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 2500,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRefreshApiDefault = () => {
  return axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 2500,
    headers: {
      'X-Refresh-Token': localStorage.getItem('refreshToken'),
    },
  });
};
