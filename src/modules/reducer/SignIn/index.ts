export const PASSWORD = 'SignIn/PASSWORD' as const;
export const EMAIL = 'SignIn/EMAIL' as const;
export const RESET = 'SignIn/RESET' as const;

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload,
});

export const setEmail = (payload: string) => ({
  type: EMAIL,
  payload,
});

export const reset = () => ({
  type: RESET,
});

export type SignInState = {
  password: string;
  email: string;
};

export const initialState: SignInState = {
  password: '',
  email: '',
};

export type SignInActionType =
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof reset>;

export const SignInState = (
  state: SignInState = initialState,
  action: SignInActionType,
): SignInState => {
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
