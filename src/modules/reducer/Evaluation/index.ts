import { PeerEvaluation } from '../../../lib/api/PeerEvaluationModal';

export const SET_PEER = 'Evaluation/SET_PEER' as const;

export const setPeers = (peers: PeerEvaluation[]) => ({
  type: SET_PEER,
  payload: { peers },
});

export type EvaluationAction = ReturnType<typeof setPeers>;

export type EvaluationState = {
  peers: PeerEvaluation[];
};

const initialState: EvaluationState = {
  peers: [],
};

export default function Evaluation(
  state: EvaluationState = initialState,
  action: EvaluationAction,
) {
  switch (action.type) {
    case SET_PEER:
      return {
        ...state,
        peers: action.payload.peers,
      };
    default:
      return state;
  }
}
