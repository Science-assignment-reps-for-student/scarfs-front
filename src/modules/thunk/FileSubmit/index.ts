import { createRequestFileThunk } from '../../../lib/thunk';
import { GET_SUBMITTED_FILES, SUBMIT_FILE, DELETE_SUBMITTED_FILE } from '../../reducer/FileSubmit';
import { getSubmittedFiles, submitFile, deleteSubmittedFile } from '../../../lib/api/FileSubmit';

export const getSubmittedFilesThunk = createRequestFileThunk(
  GET_SUBMITTED_FILES,
  getSubmittedFiles,
);

export const submitFileThunk = createRequestFileThunk(SUBMIT_FILE, submitFile);

export const deleteSubmittedFileThunk = createRequestFileThunk(
  DELETE_SUBMITTED_FILE,
  deleteSubmittedFile,
);
