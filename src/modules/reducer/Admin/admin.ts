import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  Personal,
  dummyPersonal1,
  dummyPersonal2,
  dummyPersonal3,
  dummyPersonal4,
  PersonalSubject,
} from './adminPersonal';
import { Team, dummyTeam1, dummyTeam2, dummyTeam3, dummyTeam4, TeamSubject } from './adminTeam';
import {
  Experiment,
  dummyExperiment1,
  dummyExperiment2,
  dummyExperiment3,
  dummyExperiment4,
  ExperimentSubject,
} from './adminExperiment';
import {
  addPropsOfPersonal,
  addPropsOfTeam,
  addPropsOfExperiment,
  sortPersonalById,
  sortTeamById,
  sortExperimentById,
} from './adminUtil';

export type CombineAdmin = Personal | Team | Experiment;
export type CombineAdmins = CombineAdmin[];
export type CombineAdminSubject = PersonalSubject | TeamSubject | ExperimentSubject;
export type CombineAdminSubjects = CombineAdminSubject[];

export const PERSONAL_STR = '개인' as const;
export const TEAM_STR = '팀' as const;
export const EXPERIMENT_STR = '실험' as const;

export const FETCH_PERSONAL = 'FETCH_PERSONAL' as const;
export const FETCH_TEAM = 'FETCH_TEAM' as const;
export const FETCH_EXPERIMENT = 'FETCH_EXPERIMENT' as const;
export const LOADING = 'LOADING' as const;

export const fetchPersonal = (personalList: Personal[]) => ({
  type: FETCH_PERSONAL,
  payload: { personalList },
});
export const fetchTeam = (teamList: Team[]) => ({
  type: FETCH_TEAM,
  payload: { teamList },
});
export const fetchExperiment = (experimentList: Experiment[]) => ({
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
  personalList: Personal[];
  teamList: Team[];
  experimentList: Experiment[];
  loading: boolean;
};

const initialPersonal: AdminState = {
  personalList: [],
  teamList: [],
  experimentList: [],
  loading: false,
};

export const fetchPersonalThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  null,
  AdminAction
>> = () => async dispatch => {
  dispatch(fetchLoading());
  try {
    const personalList: Personal[] = [];
    [dummyPersonal1, dummyPersonal2, dummyPersonal3, dummyPersonal4].forEach(person => {
      personalList.push(addPropsOfPersonal(sortPersonalById(person)));
    });
    dispatch(fetchPersonal(personalList));
  } catch (err) {
    throw err;
  }
};
export const fetchTeamThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = () => async dispatch => {
  try {
    const teamList: Team[] = [];
    [dummyTeam1, dummyTeam2, dummyTeam3, dummyTeam4].forEach(person => {
      teamList.push(addPropsOfTeam(sortTeamById(person)));
    });
    dispatch(fetchTeam(teamList));
  } catch (err) {
    throw err;
  }
};
export const fetchExperimentThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = () => async dispatch => {
  try {
    // api get
    const experimentList: Experiment[] = [];
    [dummyExperiment1, dummyExperiment2, dummyExperiment3, dummyExperiment4].forEach(person => {
      experimentList.push(addPropsOfExperiment(sortExperimentById(person)));
    });
    dispatch(fetchExperiment(experimentList));
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
        loading: false,
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
