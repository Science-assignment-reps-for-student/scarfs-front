import { GET_BOARD as GET_BOARD_CLASS } from '../ClassBoard';
import { GET_DETAIL_POST as GET_DETAIL_POST_CLASS } from '../ClassDetailPost';

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
  [GET_BOARD_CLASS]: boolean;
  [GET_DETAIL_POST_CLASS]: boolean;
};

const initialState: LoadingState = {
  [GET_BOARD_CLASS]: false,
  [GET_DETAIL_POST_CLASS]: false,
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
