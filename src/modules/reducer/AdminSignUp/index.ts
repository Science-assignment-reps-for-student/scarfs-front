export interface SignUp {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export const signUpInit: SignUp = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
};

export const EMAIL = 'EMAIL';
export const PASSWORD = 'PASSWORD';
export const CONFIRM_PASSWORD = 'CONFIRM_PASSWORD';
export const NAME = 'NAME';

export const changeEmail = (val: string) => ({
  type: EMAIL,
  payload: { val },
});
export const changePassword = (val: string) => ({
  type: PASSWORD,
  payload: { val },
});
export const changeConfirmPassword = (val: string) => ({
  type: CONFIRM_PASSWORD,
  payload: { val },
});
export const changeName = (val: string) => ({
  type: NAME,
  payload: { val },
});

export type SignUpAction =
  | ReturnType<typeof changeEmail>
  | ReturnType<typeof changePassword>
  | ReturnType<typeof changeConfirmPassword>
  | ReturnType<typeof changeName>;

export const signUpReducer = (state: SignUp, action: SignUpAction) => {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email: action.payload.val,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload.val,
      };
    case CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.payload.val,
      };
    case NAME:
      return {
        ...state,
        name: action.payload.val,
      };
    default:
      return state;
  }
};
