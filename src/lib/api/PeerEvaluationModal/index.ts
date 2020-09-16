import { getApiDefault } from '../client';

export interface SelfEvaluation {
  scientificAccuracy: number;
  communication: number;
  attitude: number;
  createdAt: string;
}

export interface PeerEvaluation {
  finish: boolean;
  student_id: number;
  student_name: string;
  student_number: string;
}

export const apiSelfEvaluation = (homeworkId: string) => {
  return getApiDefault().get<SelfEvaluation>(`/shank/evaluation/info/personal/${homeworkId}`);
};

export const apiPeerEvaluation = (homeworkId: string) => {
  return getApiDefault().get<PeerEvaluation[]>(`/shank/evaluation/info/${homeworkId}`);
};
