import { createRequestThunk } from '../../../lib/thunk';
import { GET_SUBMITTED_FILES, SUBMIT_FILE, DELETE_SUBMITTED_FILE } from '../../reducer/FileSubmit';
import { getSubmittedFiles, submitFile, deleteSubmittedFile } from '../../../lib/api/FileSubmit';

export const getSubmittedFilesThunk = createRequestThunk(GET_SUBMITTED_FILES, getSubmittedFiles);
export const submitFileThunk = createRequestThunk(SUBMIT_FILE, submitFile);
export const deleteSubmittedFileThunk = createRequestThunk(
  DELETE_SUBMITTED_FILE,
  deleteSubmittedFile,
);
