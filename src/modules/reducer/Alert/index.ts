const CREATE_ALERT = 'CREATE_ALERT' as const;
const DELETE_ALERT = 'DELETE_ALERT' as const;
const RETURN_VALUE = 'RETURN_VALUE' as const;
const RESET_VALUE = 'RESET_VALUE' as const;

export const createAlert = (explain: string) => ({
  type: CREATE_ALERT,
  payload: { explain },
});
export const deleteAlert = () => ({
  type: DELETE_ALERT,
});
export const setReturnValue = (val: boolean) => ({
  type: RETURN_VALUE,
  payload: { val },
});
export const resetReturnValue = () => ({
  type: RESET_VALUE,
});

type AlertAction =
  | ReturnType<typeof createAlert>
  | ReturnType<typeof deleteAlert>
  | ReturnType<typeof resetReturnValue>
  | ReturnType<typeof setReturnValue>;

export type AlertModalTypes = 'notify' | 'warn';

export type AlertState = {
  isShow: boolean;
  returnValue: boolean | undefined;
  explain: string;
};

const initialPersonal: AlertState = {
  isShow: false,
  returnValue: undefined,
  explain: '',
};

const alert = (state = initialPersonal, action: AlertAction): AlertState => {
  switch (action.type) {
    case CREATE_ALERT:
      return {
        ...state,
        isShow: true,
        explain: action.payload.explain,
      };
    case DELETE_ALERT:
      return {
        ...state,
        isShow: false,
        explain: '',
      };
    case RETURN_VALUE:
      return {
        ...state,
        returnValue: action.payload.val,
      };
    case RESET_VALUE:
      return {
        ...state,
        returnValue: undefined,
      };
    default:
      return state;
  }
};

export default alert;
