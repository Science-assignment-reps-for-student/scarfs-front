import React, { FC, ReactElement, useState, useCallback } from 'react';

import * as S from './style';

import { submitted, unSubmitted } from '../../../assets/Admin';
import { apiFileIndex, apiFileDownloadById, tokenReIssuance } from '../../../lib/api/Admin/admin';
import { downloadBlobByClick } from '../../../lib/function/admin';

interface Props {
  studentId: number;
  studentNumber: string;
  name: string;
  submit: number;
  typing: string;
  assignmentId: number;
}

const SubmitList: FC<Props> = ({
  studentNumber,
  name,
  submit,
  studentId,
  typing,
  assignmentId,
}): ReactElement => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const assignmentType: string =
    typing === '개인' ? 'personal' : typing === '팀' ? 'team' : 'experiment';

  const handleUnEnableClick = useCallback(() => {
    setIsClick(true);
    setTimeout(() => {
      setIsClick(false);
    }, 500);
    return;
  }, [setIsClick]);

  const handleClickDownloadFile = () => {
    if (submit === 0) {
      handleUnEnableClick();
      return;
    }
    getFileIndexAndDownload();
  };

  const getFileIndexAndDownload = useCallback(async () => {
    try {
      const index = await apiFileIndex(assignmentType, assignmentId, studentId);
      for await (const { file_id, file_name } of index.data.file_information) {
        const { data } = await apiFileDownloadById(assignmentType, file_id);
        downloadBlobByClick(data, file_name);
      }
    } catch (err) {
      const code = err?.response?.status;
      if (!code) return;
      if (code === 401) {
        await tokenReIssuance();
        const index = await apiFileIndex(assignmentType, assignmentId, studentId);
        for await (const { file_id, file_name } of index.data.file_information) {
          const { data } = await apiFileDownloadById(assignmentType, file_id);
          downloadBlobByClick(data, file_name);
        }
      }
    }
  }, [assignmentId, studentId, assignmentType]);

  return (
    <S.SubjectClsContentCommonItem
      className={submit ? 'submitted' : 'unSubmitted'}
      onClick={handleClickDownloadFile}
    >
      <S.SubjectClsContentCommonItemText>{studentNumber}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        <img
          src={submit ? submitted : unSubmitted}
          className={isClick ? 'shake' : ''}
          alt='condition'
          title='condition'
        />
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default SubmitList;
