export type ErrorType = {
  message: string;
  status: number;
};

export const errorInitialState = {
  message: '',
  status: 0,
};

export type ErrorResponseType = {
  data: object;
  status: number;
};

export const errorResponseInitialState = {
  data: {},
  status: 0,
};
