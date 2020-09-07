import { ErrorType, errorInitialState } from '../../../lib/type';
import { FileResponse } from '../../../lib/api/FileSubmit';

export const GET_SUBMITTED_FILES = 'FileSubmit/GET_SUBMITTED_FILES' as const;
export const GET_SUBMITTED_FILES_SUCCESS = 'FileSubmit/GET_SUBMITTED_FILES_SUCCESS' as const;
export const GET_SUBMITTED_FILES_FAILURE = 'FileSubmit/GET_SUBMITTED_FILES_FAILURE' as const;

export const RESET_FILE_SUBMIT = 'FileSubmit/RESET_FILE_SUBMIT' as const;

export const getSubmittedFilesSuccess = (payload: { file_information: FileResponse[] }) => ({
  type: GET_SUBMITTED_FILES_SUCCESS,
  payload,
});

export const getSubmittedFilesFailure = (error: ErrorType) => ({
  type: GET_SUBMITTED_FILES_FAILURE,
  payload: error,
});

export const resetFileSubmit = () => ({
  type: RESET_FILE_SUBMIT,
});

export type FileSubmitAcion =
  | ReturnType<typeof getSubmittedFilesSuccess>
  | ReturnType<typeof getSubmittedFilesFailure>
  | ReturnType<typeof resetFileSubmit>;

export type FileSubmitStatus = {
  submittedFiles: FileResponse[];
  getSubmittedFilesError: ErrorType;
};

const initialState: FileSubmitStatus = {
  submittedFiles: [],
  getSubmittedFilesError: errorInitialState,
};

export default function FileSubmit(
  state: FileSubmitStatus = initialState,
  action: FileSubmitAcion,
) {
  switch (action.type) {
    case GET_SUBMITTED_FILES_SUCCESS:
      return {
        ...state,
        getSubmittedFilesError: errorInitialState,
        submittedFiles: action.payload.file_information,
      };
    case GET_SUBMITTED_FILES_FAILURE:
      return {
        ...state,
        getSubmittedFilesError: action.payload,
      };
    default:
      return state;
  }
}