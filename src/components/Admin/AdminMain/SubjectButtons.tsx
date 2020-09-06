import React, { FC, ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './style';

import { download, edit, excel } from '../../../assets/Admin';
import {
  downloadAssignmentExcel,
  updateAssignmentExcel,
  downloadCompressedAssignments,
  tokenReIssuance,
} from '../../../lib/api/Admin/admin';
import { downBlobByClick } from '../../../lib/function/admin';

interface Props {
  assignmentId: number;
}

const SubjectButtons: FC<Props> = ({ assignmentId }): ReactElement => {
  const history = useHistory();

  const onClickDownloadFile = async () => {
    try {
      const { data } = await downloadCompressedAssignments(assignmentId);
      const blob: Blob = new Blob([data], { type: 'application/json' });
      downBlobByClick(blob, 'test.zip');
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        const { data } = await downloadCompressedAssignments(assignmentId);
        const blob: Blob = new Blob([data], { type: 'application/json' });
        downBlobByClick(blob, 'test.zip');
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  const onClickDownloadExcel = async () => {
    try {
      await updateAssignmentExcel(assignmentId);
      const { data } = await downloadAssignmentExcel(assignmentId);
      const blob: Blob = new Blob([data], { type: 'application/json' });
      downBlobByClick(blob, 'test.xls');
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        await updateAssignmentExcel(assignmentId);
        const { data } = await downloadAssignmentExcel(assignmentId);
        const blob: Blob = new Blob([data], { type: 'application/json' });
        downBlobByClick(blob, 'test.xls');
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  return (
    <S.SubjectButtonWrap>
      <S.SubjectButtonEdit to={`/admin/update/${assignmentId}`}>
        <S.SubjectButtonImg src={edit} alt='edit' title='edit' />
        수정
      </S.SubjectButtonEdit>
      <S.SubjectButton onClick={onClickDownloadFile}>
        <S.SubjectButtonImg src={download} alt='download' title='download' />
        다운로드
      </S.SubjectButton>
      <S.SubjectButton onClick={onClickDownloadExcel}>
        <S.SubjectButtonImg src={excel} alt='excel' title='excel' />
        엑셀
      </S.SubjectButton>
    </S.SubjectButtonWrap>
  );
};

export default SubjectButtons;
