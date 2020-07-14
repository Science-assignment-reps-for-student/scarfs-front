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
import { Team, dummyTeam, TeamSubject } from './adminTeam';
import { Experiment, dummyExperiment, ExperimentSubject } from './adminExperiment';

const PERSONAL_STR = '개인' as const;
const TEAM_STR = '팀' as const;
const EXPERIMENT_STR = '실험' as const;

export type CombineAdminSubjects = (PersonalSubject | TeamSubject | ExperimentSubject)[];

const addProps = (list: CombineAdminSubjects, type: string, classNum: number) => {
  return list.map(item => [
    ...list,
    (item.title = `[${type}] ${item.title}`),
    (item['type'] = type),
    (item['classNum'] = classNum),
  ]);
};

const insertTypeOfTitle = (list: CombineAdminSubjects, type: string, classNum: number) => {
  list = list || [];
  (list as PersonalSubject[]).sort((a, b) => (a.id > b.id ? 1 : -1));
  switch (type) {
    case PERSONAL_STR:
      return addProps(list as PersonalSubject[], type, classNum);
    case TEAM_STR:
      return addProps(list as TeamSubject[], type, classNum);
    case EXPERIMENT_STR:
      return addProps(list as ExperimentSubject[], type, classNum);
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
    insertTypeOfTitle(dummyPersonal1.personal_assignment, PERSONAL_STR, 1);
    insertTypeOfTitle(dummyPersonal2.personal_assignment, PERSONAL_STR, 2);
    insertTypeOfTitle(dummyPersonal3.personal_assignment, PERSONAL_STR, 3);
    insertTypeOfTitle(dummyPersonal4.personal_assignment, PERSONAL_STR, 4);
    dispatch(fetchPersonal(dummyPersonal1));
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
    insertTypeOfTitle(team_assignment, TEAM_STR, 1);
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
    insertTypeOfTitle(experiment_assignment, EXPERIMENT_STR, 1);
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
