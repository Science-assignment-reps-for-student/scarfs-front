import { SubjectCommon, PeerEvaluationCommon, TeamsInfoCommon } from './';

export interface Experiment {
  experiment_assignment?: ExperimentSubject[];
}
export interface ExperimentSubject extends SubjectCommon {
  peer_evaluation_submit: PeerEvaluationCommon[];
  teams_info: TeamsInfoCommon[];
}
