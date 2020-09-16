import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  apiCreateAssignment,
  apiUpdateAssignment,
  apiDeleteAssignment,
} from '../../../lib/api/Admin/create';

export type AssignmentTypings = 'PERSONAL' | 'TEAM' | 'EXPERIMENT';

export interface Update {
  assignmentId: string;
  fd: FormData;
  create: Create;
  title: string;
  description: string;
}

interface Create {
  files: File[];
  typing: AssignmentTypings | '';
  deadline_1: string;
  deadline_2: string;
  deadline_3: string;
  deadline_4: string;
}

export const SET_FILE = 'Admin/Create/SET_FILE' as const;
export const DELETE_FILE = 'Admin/Create/DELETE_FILE' as const;
export const SET_TYPE = 'Admin/Create/SET_TYPE' as const;
export const SET_DEADLINE = 'Admin/Create/SET_DEADLINE' as const;
export const RESET = 'Admin/Create/RESET' as const;

export const setFile = (file: File) => ({
  type: SET_FILE,
  payload: { file },
});
export const deleteFile = () => ({
  type: DELETE_FILE,
});
export const setType = (type: AssignmentTypings) => ({
  type: SET_TYPE,
  payload: { type },
});
export const setDeadline = (deadline: string, classNum: number) => ({
  type: SET_DEADLINE,
  payload: { deadline, classNum },
});
export const reset = () => ({
  type: RESET,
});

type CreateAction =
  | ReturnType<typeof setFile>
  | ReturnType<typeof deleteFile>
  | ReturnType<typeof setFile>
  | ReturnType<typeof setType>
  | ReturnType<typeof setDeadline>
  | ReturnType<typeof reset>;

export type CreateState = Create;

const initialCreate: CreateState = {
  files: [],
  typing: '',
  deadline_1: '',
  deadline_2: '',
  deadline_3: '',
  deadline_4: '',
};

export const fetchCreateThunk: ActionCreator<ThunkAction<
  Promise<void>,
  CreateAction,
  null,
  CreateAction
>> = (
  data: FormData,
  history: { push: (to: string) => void },
  dispatchAlert: Dispatch,
) => async dispatch => {
  try {
    await apiCreateAssignment(data);
    dispatch(reset());
    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

export const fetchUpdateThunk: ActionCreator<ThunkAction<
  Promise<void>,
  CreateAction,
  null,
  CreateAction
>> = (
  assignmentId: string,
  data: FormData,
  history: { push: (to: string) => void },
  dispatchAlert: Dispatch,
) => async dispatch => {
  try {
    await apiUpdateAssignment(assignmentId, data);
    dispatch(reset());
    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

export const fetchDeleteThunk: ActionCreator<ThunkAction<
  Promise<void>,
  CreateAction,
  null,
  CreateAction
>> = (
  assignmentId: string,
  history: { push: (to: string) => void },
  dispatchAlert: Dispatch,
) => async dispatch => {
  try {
    await apiDeleteAssignment(assignmentId);
    dispatch(reset());
    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

const create = (state = initialCreate, action: CreateAction): CreateState => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        files: [...state.files, action.payload.file],
      };
    case DELETE_FILE:
      return {
        ...state,
        files: [],
      };
    case SET_TYPE:
      return {
        ...state,
        typing: action.payload.type,
      };
    case SET_DEADLINE:
      return {
        ...state,
        [`deadline_${action.payload.classNum}`]: action.payload.deadline,
      };
    case RESET:
      return initialCreate;
    default:
      return state;
  }
};

export default create;
