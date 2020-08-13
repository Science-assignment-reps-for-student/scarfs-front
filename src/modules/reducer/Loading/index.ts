import { GET_BOARD } from '../ClassBoard';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = (payload: string) => ({
  type: START_LOADING,
  payload,
});
export const finishLoading = (payload: string) => ({
  type: FINISH_LOADING,
  payload,
});

export type LoadingAction = ReturnType<typeof startLoading> | ReturnType<typeof finishLoading>;

export type LoadingState = {
  [GET_BOARD]: boolean;
};

const initialState: LoadingState = {
  [GET_BOARD]: false,
};

export default function loading(state: LoadingState = initialState, action: LoadingAction) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
}
