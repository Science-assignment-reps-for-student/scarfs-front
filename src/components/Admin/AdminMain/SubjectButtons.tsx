import React, { FC, ReactElement, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './style';

import { download, edit, excel } from '../../../assets/Admin';
import {
  downloadAssignmentExcel,
  updateAssignmentExcel,
  downloadCompressedAssignments,
  tokenReIssuance,
} from '../../../lib/api/Admin/admin';
import { downloadBlobByClick } from '../../../lib/function/admin';

interface Props {
  assignmentId: number;
}

const SubjectButtons: FC<Props> = ({ assignmentId }): ReactElement => {
  const history = useHistory();

  const handleClickCompressedFile = async () => {
    try {
      const { data } = await downloadCompressedAssignments(assignmentId);
      const blob: Blob = new Blob([data], { type: 'application/json' });
      downloadBlobByClick(blob, 'test.zip');
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        const { data } = await downloadCompressedAssignments(assignmentId);
        const blob: Blob = new Blob([data], { type: 'application/json' });
        downloadBlobByClick(blob, 'test.zip');
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  const handleClickExcel = async () => {
    try {
      getExcelsAndDownload(assignmentId);
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        getExcelsAndDownload(assignmentId);
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  const getExcelsAndDownload = useCallback(async (assignmentId: number) => {
    await updateAssignmentExcel(assignmentId);
    const { data } = await downloadAssignmentExcel(assignmentId);
    const blob: Blob = new Blob([data], { type: 'application/json' });
    downloadBlobByClick(blob, 'test.xls');
  }, []);

  return (
    <S.SubjectButtonWrap>
      <S.SubjectButtonEdit to={`/admin/update/${assignmentId}`}>
        <S.SubjectButtonImg src={edit} alt='edit' title='edit' />
        수정
      </S.SubjectButtonEdit>
      <S.SubjectButton onClick={handleClickCompressedFile}>
        <S.SubjectButtonImg src={download} alt='download' title='download' />
        다운로드
      </S.SubjectButton>
      <S.SubjectButton onClick={handleClickExcel}>
        <S.SubjectButtonImg src={excel} alt='excel' title='excel' />
        엑셀
      </S.SubjectButton>
    </S.SubjectButtonWrap>
  );
};

export default SubjectButtons;
