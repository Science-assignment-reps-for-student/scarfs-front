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

export interface PrevAssignments {
  id: number;
  deadline_1: number;
  deadline_2: number;
  deadline_3: number;
  deadline_4: number;
  title: string;
  description: string;
  type: string;
  created_at: number;
  view: number;
}
