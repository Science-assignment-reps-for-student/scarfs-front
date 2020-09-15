import { getApiDefault } from '../client';

export interface SelfEvaluation {
  assignment_id: number;
  scientific_accuracy: number;
  communication: number;
  attitude: number;
}

export const apiSelfEvaluation = (self: SelfEvaluation) => {
  return getApiDefault().post<{}>('/shank/evaluation/personal', self);
};
