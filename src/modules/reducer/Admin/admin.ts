import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Personal, dummyPersonal, PersonalSubject } from './adminPersonal';
import { Team, dummyTeam, TeamSubject } from './adminTeam';
import { Experiment, dummyExperiment, ExperimentSubject } from './adminExperiment';

const PERSONAL_STR = '개인' as const;
const TEAM_STR = '팀' as const;
const EXPERIMENT_STR = '실험' as const;

type CombineAdmin = (PersonalSubject | TeamSubject | ExperimentSubject)[];

const replaceTitle = (list: CombineAdmin, type: string) => {
  return list.map(item => [
    ...list,
    (item.title = `[${type}] ${item.title}`),
    (item['type'] = type),
  ]);
};

const insertTypeOfTitle = (list: CombineAdmin, type: string) => {
  list = list || [];
  (list as PersonalSubject[]).sort((a, b) => (a.id > b.id ? 1 : -1));
  switch (type) {
    case PERSONAL_STR:
      return replaceTitle(list as PersonalSubject[], type);
    case TEAM_STR:
      return replaceTitle(list as TeamSubject[], type);
    case EXPERIMENT_STR:
      return replaceTitle(list as ExperimentSubject[], type);
    default:
      return list;
  }
};

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
  dispatch(fetchLoading());
  try {
    // const res = await apiGetList(listId);
    const { personal_assignment } = dummyPersonal;
    insertTypeOfTitle(personal_assignment, PERSONAL_STR);
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
    const { team_assignment } = dummyTeam;
    insertTypeOfTitle(team_assignment, TEAM_STR);
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
    const { experiment_assignment } = dummyExperiment;
    insertTypeOfTitle(experiment_assignment, EXPERIMENT_STR);
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
