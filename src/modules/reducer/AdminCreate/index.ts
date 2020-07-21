import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { apiCreateHomework } from '../../../lib/api/Admin/create';
import { useHistory } from 'react-router-dom';

interface Create {
  files: File[];
  title: string;
  description: string;
  type: 'SINGLE' | 'MULTI' | 'EXPERIMENT' | '';
  deadline_1: string;
  deadline_2: string;
  deadline_3: string;
  deadline_4: string;
}

export const SET_File = 'SET_File' as const;
export const SET_TITLE = 'SET_TITLE' as const;
export const SET_DESC = 'SET_DESC' as const;
export const SET_TYPE = 'SET_TYPE' as const;
export const SET_DEADLINE = 'SET_DEADLINE' as const;
export const RESET = 'RESET' as const;

export const setFile = (file: File) => ({
  type: SET_File,
  payload: { file },
});
export const setTitle = (title: string) => ({
  type: SET_TITLE,
  payload: { title },
});
export const setDesc = (desc: string) => ({
  type: SET_DESC,
  payload: { desc },
});
export const setType = (type: 'SINGLE' | 'MULTI' | 'EXPERIMENT') => ({
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
  | ReturnType<typeof setFile>
  | ReturnType<typeof setTitle>
  | ReturnType<typeof setDesc>
  | ReturnType<typeof setType>
  | ReturnType<typeof setDeadline>
  | ReturnType<typeof reset>;

export type CreateState = Create;

const initialCreate: CreateState = {
  files: [],
  title: '',
  description: '',
  type: '',
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
    await apiCreateHomework(data);
    dispatch(reset());
    alert('과제를 성공적으로 생성했습니다.');
    useHistory().push('/admin');
  } catch (err) {
    // err.response.status
    console.log(err);
    throw err;
  }
};

const create = (state = initialCreate, action: CreateAction): CreateState => {
  switch (action.type) {
    case SET_File:
      return {
        ...state,
        files: [...state.files, action.payload.file],
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case SET_DESC:
      return {
        ...state,
        description: action.payload.desc,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload.type,
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
