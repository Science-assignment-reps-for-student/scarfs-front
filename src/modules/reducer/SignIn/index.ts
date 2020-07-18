export const PASSWORD = 'SignIn/PASSWORD' as const;
export const EMAIL = 'SignIn/EMAIL' as const;
export const RESET = 'SignIn/RESET' as const;

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload: payload,
});

export const setEmail = (payload: string) => ({
  type: EMAIL,
  payload: payload,
});

export const reset = () => ({
  type: RESET,
});

export type State = {
  password: string;
  email: string;
};

export const initialState: State = {
  password: '',
  email: '',
};

export type SignInActionType =
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof reset>;

export const SignInState = (state: State = initialState, action: SignInActionType): State => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case RESET:
      return {
        ...state,
        password: '',
        email: '',
      };
    default:
      return state;
  }
};

export default SignInState;
