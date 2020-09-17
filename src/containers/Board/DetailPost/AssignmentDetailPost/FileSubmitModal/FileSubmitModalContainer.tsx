import React, { FC } from 'react';
import { FileSubmitModal } from '../../../../../components/Board/DetailPost';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import {
  FileSubmitStatus,
  resetFileSubmit as createResetFileSubmitAction,
} from '../../../../../modules/reducer/FileSubmit';
import {
  getSubmittedFilesThunk,
  submitFileThunk,
  deleteSubmittedFileThunk,
} from '../../../../../modules/thunk/FileSubmit';
import { LoadingState } from 'src/modules/reducer/Loading';

const FileSubmitModalContainer: FC = () => {
  const dispatch = useDispatch();
  const {
    submittedFiles,
    getSubmittedFilesError,
    submitFileSuccess,
    submitFileError,
    deleteSubmittedFileSuccess,
    deleteSubmittedFileError,
  } = useSelector(getStateCallback<FileSubmitStatus>('FileSubmit'));
  const { 'FileSubmit/SUBMIT_FILE': isSubmitLoading } = useSelector(
    getStateCallback<LoadingState>('Loading'),
  );

  const getSubmittedFiles = (type: string, assignmentId: number) => {
    dispatch(getSubmittedFilesThunk({ type, assignmentId }));
  };

  const submitFile = (type: string, assignmentId: number, data: FormData) => {
    dispatch(submitFileThunk({ type, assignmentId, data }));
  };
  const deleteSubmittedFile = (type: string, assignmentId: number) => {
    dispatch(deleteSubmittedFileThunk({ type, assignmentId }));
  };

  const resetFileSubmit = () => {
    dispatch(createResetFileSubmitAction());
  };

  return (
    <FileSubmitModal
      getSubmittedFiles={getSubmittedFiles}
      submittedFiles={submittedFiles}
      getSubmittedFilesError={getSubmittedFilesError}
      submitFile={submitFile}
      submitFileSuccess={submitFileSuccess}
      submitFileError={submitFileError}
      isSubmitLoading={isSubmitLoading}
      deleteSubmittedFileSuccess={deleteSubmittedFileSuccess}
      deleteSubmittedFileError={deleteSubmittedFileError}
      deleteSubmittedFile={deleteSubmittedFile}
      resetFileSubmit={resetFileSubmit}
    />
  );
};

export default FileSubmitModalContainer;
