import { ErrorResponseType, errorResponseInitialState } from '../../../lib/type';
import { FileResponse } from '../../../lib/api/FileSubmit';

export const GET_SUBMITTED_FILES = 'FileSubmit/GET_SUBMITTED_FILES' as const;
export const GET_SUBMITTED_FILES_SUCCESS = 'FileSubmit/GET_SUBMITTED_FILES_SUCCESS' as const;
export const GET_SUBMITTED_FILES_FAILURE = 'FileSubmit/GET_SUBMITTED_FILES_FAILURE' as const;

export const SUBMIT_FILE = 'FileSubmit/SUBMIT_FILE' as const;
export const SUBMIT_FILE_SUCCESS = 'FileSubmit/SUBMIT_FILE_SUCCESS' as const;
export const SUBMIT_FILE_FAILURE = 'FileSubmit/SUBMIT_FILE_FAILURE' as const;

export const DELETE_SUBMITTED_FILE = 'FileSubmit/DELETE_SUBMITTED_FILE' as const;
export const DELETE_SUBMITTED_FILE_SUCCESS = 'FileSubmit/DELETE_SUBMITTED_FILE_SUCCESS' as const;
export const DELETE_SUBMITTED_FILE_FAILURE = 'FileSubmit/DELETE_SUBMITTED_FILE_FAILURE' as const;

export const RESET_FILE_SUBMIT = 'FileSubmit/RESET_FILE_SUBMIT' as const;

export const getSubmittedFilesSuccess = (payload: { file_information: FileResponse[] }) => ({
  type: GET_SUBMITTED_FILES_SUCCESS,
  payload,
});

export const getSubmittedFilesFailure = (error: ErrorResponseType) => ({
  type: GET_SUBMITTED_FILES_FAILURE,
  payload: error,
});

export const submitFileSuccess = () => ({
  type: SUBMIT_FILE_SUCCESS,
});

export const submitFileFailure = (error: ErrorResponseType) => ({
  type: SUBMIT_FILE_FAILURE,
  payload: error,
});

export const deleteSubmittedFileSuccess = () => ({
  type: DELETE_SUBMITTED_FILE_SUCCESS,
});

export const deleteSubmittedFileFailure = (error: ErrorResponseType) => ({
  type: DELETE_SUBMITTED_FILE_FAILURE,
  payload: error,
});

export const resetFileSubmit = () => ({
  type: RESET_FILE_SUBMIT,
});

export type FileSubmitAcion =
  | ReturnType<typeof getSubmittedFilesSuccess>
  | ReturnType<typeof getSubmittedFilesFailure>
  | ReturnType<typeof submitFileSuccess>
  | ReturnType<typeof submitFileFailure>
  | ReturnType<typeof deleteSubmittedFileSuccess>
  | ReturnType<typeof deleteSubmittedFileFailure>
  | ReturnType<typeof resetFileSubmit>;

export type FileSubmitStatus = {
  submittedFiles: FileResponse[];
  getSubmittedFilesError: ErrorResponseType;
  submitFileSuccess: boolean;
  submitFileError: ErrorResponseType;
  deleteSubmittedFileSuccess: boolean;
  deleteSubmittedFileError: ErrorResponseType;
};

const initialState: FileSubmitStatus = {
  submittedFiles: [],
  getSubmittedFilesError: errorResponseInitialState,
  submitFileSuccess: false,
  submitFileError: errorResponseInitialState,
  deleteSubmittedFileSuccess: false,
  deleteSubmittedFileError: errorResponseInitialState,
};

export default function FileSubmit(
  state: FileSubmitStatus = initialState,
  action: FileSubmitAcion,
) {
  switch (action.type) {
    case GET_SUBMITTED_FILES_SUCCESS:
      return {
        ...state,
        getSubmittedFilesError: errorResponseInitialState,
        submittedFiles: action.payload.file_information,
      };
    case GET_SUBMITTED_FILES_FAILURE:
      return {
        ...state,
        getSubmittedFilesError: action.payload,
      };
    case SUBMIT_FILE_SUCCESS:
      return {
        ...state,
        submitFileError: errorResponseInitialState,
        submitFileSuccess: true,
      };
    case SUBMIT_FILE_FAILURE:
      return {
        ...state,
        submitFileSuccess: false,
        submitFileError: action.payload,
      };
    case DELETE_SUBMITTED_FILE_SUCCESS:
      return {
        ...state,
        deleteSubmittedFileError: errorResponseInitialState,
        deleteSubmittedFileSuccess: true,
      };
    case DELETE_SUBMITTED_FILE_FAILURE:
      return {
        ...state,
        deleteSubmittedFileError: action.payload,
      };
    case RESET_FILE_SUBMIT:
      return initialState;
    default:
      return state;
  }
}
