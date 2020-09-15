import { getApiDefault } from '../client';

export interface SelfEvaluation {
  assignment_id: number;
  scientific_accuracy: number;
  communication: number;
  attitude: number;
}

export interface PeerEvaluation {
  assignment_id: number;
  target_id: number;
  cooperation: number;
  communication: number;
}

export interface AlreadySelfEvaluation {
  scientific_accuracy: number;
  communication: number;
  attitude: number;
  createdAt: string;
}

export interface TargetEvaluation {
  cooperation: number;
  communication: number;
}

export const apiSelfEvaluation = (self: SelfEvaluation) => {
  return getApiDefault().post<{}>('/shank/evaluation/personal', self);
};

export const apiPeerEvaluation = (peer: PeerEvaluation) => {
  return getApiDefault().post<{}>(`/shank/evaluation/team`, peer);
};

export const apiAlreadySelfEvaluationInfo = (assignmentId: string) => {
  return getApiDefault().get<AlreadySelfEvaluation>(
    `/shank/evaluation/info/personal/${assignmentId}`,
  );
};

export const apiTargetEvaluation = (assignmentId: string, targetId: string) => {
  return getApiDefault().get<TargetEvaluation>(
    `shank/evaluation/info/team/${assignmentId}?targetId=${targetId}`,
  );
};
