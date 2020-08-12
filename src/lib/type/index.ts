export type ErrorType = {
  message: string;
  response: {
    status: number;
  };
};

export const errorInitialState = {
  message: '',
  response: {
    status: 0,
  },
};
