import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  apiCreateAssignment,
  apiUpdateAssignment,
  apiUpdateAssignmentFiles,
  apiDeleteAssignment,
} from '../../../lib/api/Admin/create';
import { useHistory } from 'react-router-dom';

export type AssignmentTypings = 'PERSONAL' | 'TEAM' | 'EXPERIMENT';

interface Create {
  files: File[];
  typing: AssignmentTypings | '';
  deadline_1: string;
  deadline_2: string;
  deadline_3: string;
  deadline_4: string;
}

export const SET_FILE = 'SET_FILE' as const;
export const DELETE_FILE = 'DELETE_FILE' as const;
export const SET_TYPE = 'SET_TYPE' as const;
export const SET_DEADLINE = 'SET_DEADLINE' as const;
export const RESET = 'RESET' as const;

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
>> = (data: FormData) => async dispatch => {
  try {
    await apiCreateAssignment(data);
    dispatch(reset());
    alert('과제를 성공적으로 생성했습니다.');
    useHistory().push('/admin');
  } catch (err) {
    // err.response.status
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
  fd: FormData,
  create: Create,
  texts: { title: string; description: string },
) => async dispatch => {
  const { title, description } = texts;
  try {
    await apiUpdateAssignmentFiles(fd, assignmentId);
    await apiUpdateAssignment(assignmentId, create, { title, description });
    dispatch(reset());
    alert('과제를 성공적으로 수정했습니다.');
    useHistory().push('/admin');
  } catch (err) {
    // err.response.status
    console.log(err);
  }
};
export const fetchDeleteThunk: ActionCreator<ThunkAction<
  Promise<void>,
  CreateAction,
  null,
  CreateAction
>> = (assignmentId: string) => async dispatch => {
  try {
    await apiDeleteAssignment(assignmentId);
    dispatch(reset());
    alert('과제를 성공적으로 삭제했습니다.');
    useHistory().push('/admin');
  } catch (err) {
    // err.response.status
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
