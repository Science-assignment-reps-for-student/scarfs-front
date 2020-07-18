export interface Login {
  type: string;
  ID: string;
  PW: string;
}

export const ID = 'ID';
export const PW = 'PW';

export const idAction = (value: string) => ({
  type: ID,
  payload: { value },
});
export const pwAction = (value: string) => ({
  type: PW,
  payload: { value },
});
export type LoginType = ReturnType<typeof idAction> | ReturnType<typeof pwAction>;

export const loginReducer = (state: Login, action: LoginType): Login => {
  switch (action.type) {
    case ID:
      return { ...state, ID: action.payload.value };
    case PW:
      return { ...state, PW: action.payload.value };
    default:
      return state;
  }
};
