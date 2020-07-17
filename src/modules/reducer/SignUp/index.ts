export const CODE = 'SignUp/CODE' as const;
export const EMAIL = 'SignUp/EMAIL' as const;
export const NUMBER = 'SignUp/NUMBER' as const;
export const NAME = 'SignUp/NAME' as const;
export const EMAIL_CODE = 'SignUp/EMAIL_CODE' as const;
export const PASSWORD = 'SignUp/PASSWORD' as const;
export const PASSWORD_CHECK = 'SignUp/PASSWORD_CHECK' as const;
export const RESET = 'SignUp/RESET' as const;

export const setCode = (payload: string) => ({
  type: CODE,
  payload: payload,
});

export const setEmail = (payload: string) => ({
  type: EMAIL,
  payload: payload,
});

export const setNumber = (payload: string) => ({
  type: NUMBER,
  payload: payload,
});

export const setName = (payload: string) => ({
  type: NAME,
  payload: payload,
});

export const setEmailCode = (payload: string) => ({
  type: EMAIL_CODE,
  payload: payload,
});

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload: payload,
});

export const setPasswordCheck = (payload: string) => ({
  type: PASSWORD_CHECK,
  payload: payload,
});

export const reset = () => ({
  type: RESET,
});

export type State = {
  code: string;
  email: string;
  number: string;
  name: string;
  emailCode: string;
  password: string;
  passwordCheck: string;
};

export const initialState: State = {
  code: '',
  email: '',
  emailCode: '',
  number: '',
  name: '',
  password: '',
  passwordCheck: '',
};

export type SignUpActionType =
  | ReturnType<typeof setCode>
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setEmailCode>
  | ReturnType<typeof setName>
  | ReturnType<typeof setNumber>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setPasswordCheck>
  | ReturnType<typeof reset>;

export const SignUpState = (state: State = initialState, action: SignUpActionType): State => {
  switch (action.type) {
    case CODE:
      return {
        ...state,
        code: action.payload,
      };
    case EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case NAME:
      return {
        ...state,
        name: action.payload,
      };
    case EMAIL_CODE:
      return {
        ...state,
        emailCode: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck: action.payload,
      };
    case RESET:
      return {
        code: '',
        email: '',
        number: '',
        name: '',
        emailCode: '',
        password: '',
        passwordCheck: '',
      };
    default:
      return state;
  }
};

export default SignUpState;
