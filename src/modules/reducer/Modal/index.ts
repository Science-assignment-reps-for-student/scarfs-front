export const ERROR = 'Modal/ISERROR' as const;
export const MODAL = 'Modal/MODAL' as const;
export const RESET = 'Modal/RESET' as const;
export const ERROR_MESSAGE = 'Modal/ERROR_MESSAGE' as const;

export type ModalType = 'SignUpCode' | 'SignUpInfo' | 'SignIn' | 'SignUpEmail' | '';
export type ErrorType =
  | 'CodeError'
  | 'SignInError'
  | 'SignUpInfoError'
  | 'SignUpPasswordError'
  | 'SignUpEmailError'
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

export type ModalState = {
  error: ErrorType;
  modal: ModalType;
  errorType: string;
};

export const initialState: ModalState = {
  error: '',
  modal: '',
  errorType: '',
};

export type ModalActionType =
  | ReturnType<typeof setError>
  | ReturnType<typeof setModal>
  | ReturnType<typeof reset>;

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
    default:
      return state;
  }
};

export default ModalState;
