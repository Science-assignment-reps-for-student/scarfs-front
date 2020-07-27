import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Personal, PersonalSubject } from './adminPersonal';
import { Team, TeamSubject } from './adminTeam';
import { Experiment, ExperimentSubject } from './adminExperiment';
import {
  addPropsOfPersonal,
  addPropsOfTeam,
  addPropsOfExperiment,
  sortPersonal,
  sortTeam,
  sortExperiment,
} from './adminUtil';
import {
  tokenReIssuance,
  getAssignmentPersonal,
  getAssignmentTeam,
  getAssignmentExperiment,
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
  typing?: string;
}
export interface TeamsInfoCommon {
  team_name: string;
  submit: number;
  members: MemberCommon[];
  team_id: number;
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

export const fetchPersonalThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  null,
  AdminAction
>> = () => async dispatch => {
  try {
    const personalList: Personal[] = [];
    const personals: Personal[] = [];
    personals.push((await getAssignmentPersonal(1)).data);
    personals.push((await getAssignmentPersonal(2)).data);
    personals.push((await getAssignmentPersonal(3)).data);
    personals.push((await getAssignmentPersonal(4)).data);

    for await (const personal of personals) {
      sortPersonal(personal);
      addPropsOfPersonal(personal);
      personalList.push(personal);
    }
    dispatch(fetchPersonal(personalList));
    dispatch(fetchLoading());
  } catch (err) {
    const code = err?.response?.status;
    if (!code) return;
    if (err?.response?.status === 401) {
      tokenReIssuance();
    }
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
    const teams: Team[] = [];
    teams.push((await getAssignmentTeam(1)).data);
    teams.push((await getAssignmentTeam(2)).data);
    teams.push((await getAssignmentTeam(3)).data);
    teams.push((await getAssignmentTeam(4)).data);

    for await (const team of teams) {
      sortTeam(team);
      addPropsOfTeam(team);
      teamList.push(team);
    }
    dispatch(fetchTeam(teamList));
    dispatch(fetchLoading());
  } catch (err) {}
};
export const fetchExperimentThunk: ActionCreator<ThunkAction<
  Promise<void>,
  AdminAction,
  any,
  AdminAction
>> = () => async dispatch => {
  try {
    const experimentList: Experiment[] = [];
    const experiments: Experiment[] = [];
    experiments.push((await getAssignmentExperiment(1)).data);
    experiments.push((await getAssignmentExperiment(2)).data);
    experiments.push((await getAssignmentExperiment(3)).data);
    experiments.push((await getAssignmentExperiment(4)).data);

    for await (const experiment of experiments) {
      sortExperiment(experiment);
      addPropsOfExperiment(experiment);
      experimentList.push(experiment);
    }
    dispatch(fetchExperiment(experimentList));
    dispatch(fetchLoading());
  } catch (err) {}
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
    case LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default admin;
