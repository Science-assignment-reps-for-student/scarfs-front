import { ErrorType, errorInitialState } from '../../../lib/type';

export const CREATE_TEAM = 'CreateTeam/CREATE_TEAM' as const;
export const CREATE_TEAM_SUCCESS = 'CreateTeam/CREATE_TEAM_SUCCESS' as const;
export const CREATE_TEAM_FAILURE = 'CreateTeam/CREATE_TEAM_FAILURE' as const;

export const RESET_CREATE_TEAM_STATE = 'CreateTeam/RESET_CREATE_TEAM_STATE' as const;

export const createTeamSuccess = () => ({
  type: CREATE_TEAM_SUCCESS,
});

export const createTeamFailure = (error: ErrorType) => ({
  type: CREATE_TEAM_FAILURE,
  payload: error,
});

export const resetCreateTeamState = () => ({
  type: RESET_CREATE_TEAM_STATE,
});

export type CreateTeamAction =
  | ReturnType<typeof createTeamSuccess>
  | ReturnType<typeof createTeamFailure>
  | ReturnType<typeof resetCreateTeamState>;

export type CreateTeamState = {
  createTeamSuccess: boolean;
  createTeamError: ErrorType;
};

const initialState: CreateTeamState = {
  createTeamSuccess: false,
  createTeamError: errorInitialState,
};

export default function CreateTeam(
  state: CreateTeamState = initialState,
  action: CreateTeamAction,
) {
  switch (action.type) {
    case CREATE_TEAM_SUCCESS:
      return {
        ...state,
        createTeamError: errorInitialState,
        createTeamSuccess: true,
      };
    case CREATE_TEAM_FAILURE:
      return {
        ...state,
        createTeamError: action.payload,
      };
    case RESET_CREATE_TEAM_STATE:
      return initialState;
    default:
      return state;
  }
}
