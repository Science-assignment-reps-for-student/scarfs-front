const CREATE_ALERT = 'CREATE_ALERT' as const;
const DELETE_ALERT = 'DELETE_ALERT' as const;
const RETURN_VALUE = 'RETURN_VALUE' as const;
const RESET_VALUE = 'RESET_VALUE' as const;
const SET_CHECK_CALLBACK = 'SET_CHECK_CALLBACK' as const;
const SET_CANCEL_CALLBACK = 'SET_CANCEL_CALLBACK' as const;

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
export const setCheckCallback = (callback: () => void) => ({
  type: SET_CHECK_CALLBACK,
  payload: { callback },
});
export const setCancelCallback = (callback: () => void) => ({
  type: SET_CANCEL_CALLBACK,
  payload: { callback },
});

type AlertAction =
  | ReturnType<typeof createAlert>
  | ReturnType<typeof deleteAlert>
  | ReturnType<typeof resetReturnValue>
  | ReturnType<typeof setReturnValue>
  | ReturnType<typeof setCheckCallback>
  | ReturnType<typeof setCancelCallback>;

export type AlertModalTypes = 'notify' | 'warn';

export type AlertState = {
  isShow: boolean;
  returnValue: boolean | undefined;
  explain: string;
  checkCallback: () => void;
  cancelCallback: () => void;
};

const initialPersonal: AlertState = {
  isShow: false,
  returnValue: undefined,
  explain: '오류가 발생하였습니다. \n 잠시 후 다시 시도해주세요.',
  checkCallback: () => {},
  cancelCallback: () => {},
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
    case SET_CHECK_CALLBACK:
      return {
        ...state,
        checkCallback: action.payload.callback,
      };
    case SET_CANCEL_CALLBACK:
      return {
        ...state,
        cancelCallback: action.payload.callback,
      };
    default:
      return state;
  }
};

export default alert;
