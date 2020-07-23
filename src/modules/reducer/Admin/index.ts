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
  sortPersonal,
  sortTeam,
  sortExperiment,
} from './adminUtil';
import {
  fetchPersonalAssignment,
  fetchTeamAssignment,
  fetchExperimentAssignment,
} from '../../../lib/api/Admin/admin';

export type CombineAdmin = Personal | Team | Experiment;
export type CombineAdmins = CombineAdmin[];
export type CombineAdminSubject = PersonalSubject | TeamSubject | ExperimentSubject;
export type CombineAdminSubjects = CombineAdminSubject[];

export interface SubjectCommon {
  id: number;
  title: string;
  description: string;
  created_at: number;
  deadline: number;
  type?: string;
}
export interface PrEvalCommon {
  name: string;
  student_number: string;
  submit: number;
}
export interface MemberCommon {
  name: string;
  student_number: string;
}

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
  loading: true,
};
const classNumbers = [1, 2, 3, 4];

export const fetchPersonalThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  null,
  AdminAction
>> = () => async dispatch => {
  dispatch(fetchLoading());
  try {
    const personalList: Personal[] = [];
    const personalList2: Personal[] = [];
    const personals = classNumbers.map(
      async classNum => (await fetchPersonalAssignment(classNum)).data,
    );
    for await (const personal of personals) {
      personalList.push(personal);
    }
    [dummyPersonal1, dummyPersonal2, dummyPersonal3, dummyPersonal4].forEach(person => {
      sortPersonal(person);
      addPropsOfPersonal(person);
      personalList2.push(person);
    });
    dispatch(fetchPersonal(personalList2));
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
    [dummyTeam1, dummyTeam2, dummyTeam3, dummyTeam4].forEach(team => {
      sortTeam(team);
      addPropsOfTeam(team);
      teamList.push(team);
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
    [dummyExperiment1, dummyExperiment2, dummyExperiment3, dummyExperiment4].forEach(experiment => {
      sortExperiment(experiment);
      addPropsOfExperiment(experiment);
      experimentList.push(experiment);
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
