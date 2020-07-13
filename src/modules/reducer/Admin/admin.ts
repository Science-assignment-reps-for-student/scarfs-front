import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Personal, dummyPersonal } from './adminPersonal';
import { Team, dummyTeam } from './adminTeam';
import { Experiment, dummyExperiment } from './adminExperiment';

export const FETCH_PERSONAL = 'FETCH_PERSONAL' as const;
export const FETCH_TEAM = 'FETCH_TEAM' as const;
export const FETCH_EXPERIMENT = 'FETCH_EXPERIMENT' as const;
export const LOADING = 'LOADING' as const;

export const fetchPersonal = (personalList: Personal) => ({
  type: FETCH_PERSONAL,
  payload: { personalList },
});
export const fetchTeam = (teamList: Team) => ({
  type: FETCH_TEAM,
  payload: { teamList },
});
export const fetchExperiment = (experimentList: Experiment) => ({
  type: FETCH_EXPERIMENT,
  payload: { experimentList },
});
export const fetchLoading = () => ({
  type: LOADING,
});

type AdminAction =
  | ReturnType<typeof fetchPersonal>
  | ReturnType<typeof fetchTeam>
  | ReturnType<typeof fetchExperiment>
  | ReturnType<typeof fetchLoading>;

export type AdminState = {
  personalList: Personal;
  teamList: Team;
  experimentList: Experiment;
  loading: boolean;
};

const initialPersonal: AdminState = {
  personalList: {},
  teamList: {},
  experimentList: {},
  loading: false,
};

export const fetchPersonalThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  null,
  AdminAction
>> = (personalList: Personal) => async dispatch => {
  try {
    // const res = await apiGetList(listId);
    dummyPersonal.personal_assignment.sort((a, b) => (a > b ? 1 : -1));
    dispatch(fetchPersonal(dummyPersonal));
  } catch (err) {
    throw err;
  }
};
export const fetchTeamThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = (teamList: Team) => async dispatch => {
  try {
    // api get
    dummyTeam.team_assignment.sort((a, b) => (a > b ? 1 : -1));
    dispatch(fetchTeam(dummyTeam));
  } catch (err) {
    throw err;
  }
};
export const fetchExperimentThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = (experimentList: Experiment) => async dispatch => {
  try {
    // api get
    dummyExperiment.experiment_assignment.sort((a, b) => (a > b ? 1 : -1));
    dispatch(fetchExperiment(dummyExperiment));
  } catch (err) {
    throw err;
  }
};

const admin = (state = initialPersonal, action: AdminAction): AdminState => {
  switch (action.type) {
    case FETCH_PERSONAL:
      return {
        ...state,
        personalList: action.payload.personalList,
        loading: false,
      };
    case FETCH_TEAM:
      return {
        ...state,
        teamList: action.payload.teamList,
      };
    case FETCH_EXPERIMENT:
      return {
        ...state,
        experimentList: action.payload.experimentList,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default admin;
