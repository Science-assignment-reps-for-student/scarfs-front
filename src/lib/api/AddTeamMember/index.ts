import { getApiDefault } from '../client';

export interface StudentResponse {
  id: number;
  number: string;
  name: string;
}

export const getStudents = (query: string) =>
  getApiDefault().get<StudentResponse[]>(`/shank/user/search?query=${query}`);
