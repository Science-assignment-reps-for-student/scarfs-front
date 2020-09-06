import { removeTimeOutTimerThunk, setTimeOutTimerThunk } from '../../../modules/thunk/Modal';

export const ERROR = 'Modal/ISERROR' as const;
export const MODAL = 'Modal/MODAL' as const;
export const RESET = 'Modal/RESET' as const;
export const ERROR_MESSAGE = 'Modal/ERROR_MESSAGE' as const;
export const TIMER_NUMBER = 'Modal/TIMER_NUMBER' as const;
export type ModalType =
  | 'SignUpCode'
  | 'SignUpInfo'
  | 'SignIn'
  | 'SignUpEmail'
  | 'FileSubmit'
  | 'PeerEvaluation'
  | 'AddTeamMember'
  | 'CommentModal'
  | '';
export type ErrorType =
  | 'CodeError'
  | 'SignInError'
  | 'SignUpInfoError'
  | 'SignUpPasswordError'
  | 'SignUpEmailError'
  | 'SignUpPasswordRegexError'
  | 'TimeOutError'
  | '';

export const setError = (payload: ErrorType) => ({
  type: ERROR,
  payload: payload,
});

export const setModal = (payload: ModalType) => ({
  type: MODAL,
  payload: payload,
});

export const reset = () => ({
  type: RESET,
});

export const setTimerNumber = (payload: number) => ({
  type: TIMER_NUMBER,
  payload,
});

export type ModalState = {
  error: ErrorType;
  modal: ModalType;
  timerNumber: number;
};

export const setTimeOutTimer = setTimeOutTimerThunk();

export const removeTimeOutTimer = removeTimeOutTimerThunk();

export const initialState: ModalState = {
  error: '',
  modal: '',
  timerNumber: 0,
};

export type ModalActionType =
  | ReturnType<typeof setError>
  | ReturnType<typeof setModal>
  | ReturnType<typeof reset>
  | ReturnType<typeof setTimerNumber>;

export const ModalState = (
  state: ModalState = initialState,
  action: ModalActionType,
): ModalState => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case RESET:
      return {
        ...state,
        modal: '',
        error: '',
      };
    case TIMER_NUMBER: {
      return {
        ...state,
        timerNumber: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ModalState;
