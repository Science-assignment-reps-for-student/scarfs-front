import axios from 'axios';

const isTextHaveKorean = (text: string): boolean => {
  const rxg = /[ㄱ-ㅎ]|[ㅏ-ㅣ]|[가-힣]/;
  return rxg.test(text);
};

export const getApiDefault = (contentType?: string) => {
  const accessToken = localStorage.getItem('accessToken');
  if (isTextHaveKorean(accessToken)) window.location.href = '/error';
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      'Content-Type': contentType ? contentType : 'application/json',
    },
  });
};

export const getRefreshApiDefault = () => {
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'X-Refresh-Token': localStorage.getItem('refreshToken'),
    },
  });
};
