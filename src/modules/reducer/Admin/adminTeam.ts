import { SubjectCommon, TeamsInfoCommon, PeerEvaluationCommon } from './';

export interface Team {
  team_assignment?: TeamSubject[];
}
export interface TeamSubject extends SubjectCommon {
  peer_evaluation_submit: PeerEvaluationCommon[];
  teams_info: TeamsInfoCommon[];
}
