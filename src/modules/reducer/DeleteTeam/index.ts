import { ErrorType, errorInitialState } from '../../../lib/type';

export const DELETE_TEAM = 'Delete/DELETE_TEAM' as const;
export const DELETE_TEAM_SUCCESS = 'Delete/DELETE_TEAM_SUCCESS' as const;
export const DELETE_TEAM_FAILURE = 'Delete/DELETE_TEAM_FAILURE' as const;

export const RESET_DELETE_TEAM_STATE = 'Delete/RESET_DELETE_TEAM_STATE' as const;

export const deleteTeamSuccess = () => ({
  type: DELETE_TEAM_SUCCESS,
});

export const deleteTeamFailure = (error: ErrorType) => ({
  type: DELETE_TEAM_FAILURE,
  payload: error,
});

export const resetDeleteTeamState = () => ({
  type: RESET_DELETE_TEAM_STATE,
});

export type DeleteTeamAction =
  | ReturnType<typeof deleteTeamSuccess>
  | ReturnType<typeof deleteTeamFailure>
  | ReturnType<typeof resetDeleteTeamState>;

export type DeleteTeamState = {
  deleteTeamSuccess: boolean;
  deleteTeamError: ErrorType;
};

const initialState: DeleteTeamState = {
  deleteTeamSuccess: false,
  deleteTeamError: errorInitialState,
};

export default function DeleteTeam(
  state: DeleteTeamState = initialState,
  action: DeleteTeamAction,
) {
  switch (action.type) {
    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        deleteTeamError: errorInitialState,
        deleteTeamSuccess: true,
      };
    case DELETE_TEAM_FAILURE:
      return {
        ...state,
        deleteTeamSuccess: false,
        deleteTeamError: action.payload,
      };
    case RESET_DELETE_TEAM_STATE:
      return initialState;
    default:
      return state;
  }
}
