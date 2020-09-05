import React, { FC } from 'react';
import { FileSubmitModal } from '../../../../../components/Board/DetailPost';
import { useSelector, useDispatch } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';
import { FileSubmitStatus } from '../../../../../modules/reducer/FileSubmit';
import { getSubmittedFilesThunk } from '../../../../../modules/thunk/FileSubmit';

const FileSubmitModalContainer: FC = () => {
  const dispatch = useDispatch();
  const { submittedFiles, getSubmittedFilesError } = useSelector(
    getStateCallback<FileSubmitStatus>('FileSubmit'),
  );

  const getSubmittedFiles = (type: string, assignmentId: number) => {
    dispatch(getSubmittedFilesThunk({ type, assignmentId }));
  };

  return (
    <FileSubmitModal
      getSubmittedFiles={getSubmittedFiles}
      submittedFiles={submittedFiles}
      getSubmittedFilesError={getSubmittedFilesError}
    />
  );
};

export default FileSubmitModalContainer;
