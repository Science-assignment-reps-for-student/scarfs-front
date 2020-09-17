import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AxiosError } from 'axios';

import { Team, TeamSubject } from './adminTeam';
import { Personal, PersonalSubject } from './adminPersonal';
import { Experiment, ExperimentSubject } from './adminExperiment';
import {
  addPropsOfExperiment,
  addPropsOfPersonal,
  addPropsOfTeam,
  networkError,
} from './adminUtil';

import {
  getAssignmentExperiment,
  getAssignmentPersonal,
  getAssignmentTeam,
  tokenReIssuance,
} from '../../../lib/api/Admin/admin';
import { setAccessToken, setRefreshToken } from '../Header';

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
  typing?: string;
}
export interface TeamsInfoCommon {
  team_name: string;
  submit: number;
  members: MemberCommon[];
  team_id: number;
}
export interface PeerEvaluationCommon {
  name: string;
  student_number: string;
  student_id: number;
  submit: number;
}
export interface MemberCommon {
  name: string;
  student_number: string;
}

export const PERSONAL_STR = '개인' as const;
export const TEAM_STR = '팀' as const;
export const EXPERIMENT_STR = '실험' as const;

export const FETCH_PERSONAL = 'Admin/Main/FETCH_PERSONAL' as const;
export const FETCH_TEAM = 'Admin/Main/FETCH_TEAM' as const;
export const FETCH_EXPERIMENT = 'Admin/Main/FETCH_EXPERIMENT' as const;
export const MAIN_LOADING = 'Admin/Main/MAIN_LOADING' as const;

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
  type: MAIN_LOADING,
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

const assignmentPersonal = async () => {
  const personalList: Personal[] = [];
  const personals: Personal[] = [];
  personals.push((await getAssignmentPersonal(1)).data);
  personals.push((await getAssignmentPersonal(2)).data);
  personals.push((await getAssignmentPersonal(3)).data);
  personals.push((await getAssignmentPersonal(4)).data);
  for await (const personal of personals) {
    personalList.push(addPropsOfPersonal(personal));
  }
  return personalList;
};

const assignmentTeam = async () => {
  const teamList: Team[] = [];
  const teams: Team[] = [];
  teams.push((await getAssignmentTeam(1)).data);
  teams.push((await getAssignmentTeam(2)).data);
  teams.push((await getAssignmentTeam(3)).data);
  teams.push((await getAssignmentTeam(4)).data);
  for await (const team of teams) {
    teamList.push(addPropsOfTeam(team));
  }
  return teamList;
};

const assignmentExperiment = async () => {
  const experimentList: Experiment[] = [];
  const experiments: Experiment[] = [];
  experiments.push((await getAssignmentExperiment(1)).data);
  experiments.push((await getAssignmentExperiment(2)).data);
  experiments.push((await getAssignmentExperiment(3)).data);
  experiments.push((await getAssignmentExperiment(4)).data);
  for await (const experiment of experiments) {
    experimentList.push(addPropsOfExperiment(experiment));
  }
  return experimentList;
};

export const fetchPersonalThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  null,
  AdminAction
>> = (dispatchToken: Dispatch) => async dispatch => {
  try {
    dispatch(fetchPersonal(await assignmentPersonal()));
    dispatch(fetchLoading());
  } catch (err) {
    await assignmentErrorHandle(err, dispatch, async () => {
      await tokenReIssuance();
      dispatchToken(setAccessToken(localStorage.getItem('accessToken')));
      dispatchToken(setRefreshToken(localStorage.getItem('refreshToken')));
      dispatch(fetchPersonal(await assignmentPersonal()));
      dispatch(fetchLoading());
    });
  }
};
export const fetchTeamThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = () => async dispatch => {
  try {
    dispatch(fetchTeam(await assignmentTeam()));
  } catch (err) {
    await assignmentErrorHandle(err, dispatch, async () => {
      dispatch(fetchTeam(await assignmentTeam()));
    });
  }
};
export const fetchExperimentThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = () => async dispatch => {
  try {
    dispatch(fetchExperiment(await assignmentExperiment()));
    dispatch(fetchLoading());
  } catch (err) {
    await assignmentErrorHandle(err, dispatch, async () => {
      dispatch(fetchExperiment(await assignmentExperiment()));
      dispatch(fetchLoading());
    });
  }
};

const assignmentErrorHandle = async (err: AxiosError, dispatch: Dispatch, unAuthCb: any) => {
  if ((err.toJSON() as { message: string }).message === 'Network Error') {
    dispatch(fetchPersonal(networkError));
    dispatch(fetchLoading());
    return;
  }
  const code = err?.response?.status;
  if (!code) return;
  if (code === 401) {
    unAuthCb();
  } else if (code === 403) {
    location.href = '/admin/login';
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
      };
    case MAIN_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default admin;
