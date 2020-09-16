import { SubjectCommon, PeerEvaluationCommon } from './';

export interface Personal {
  personal_assignment?: PersonalSubject[];
}

export interface PersonalSubject extends SubjectCommon {
  class_submit: PeerEvaluationCommon[];
}
