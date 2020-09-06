import { createRequestThunk } from '../../../lib/thunk';
import { GET_SUBMITTED_FILES } from '../../reducer/FileSubmit';
import { getSubmittedFiles } from '../../../lib/api/FileSubmit';

export const getSubmittedFilesThunk = createRequestThunk(GET_SUBMITTED_FILES, getSubmittedFiles);
