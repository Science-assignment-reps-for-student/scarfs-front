import React, { FC, ReactElement, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './style';
import ButtonProgress from './ButtonProgress';

import { download, edit, excel, defaultLoading } from '../../../assets/Admin';
import {
  downloadAssignmentExcel,
  updateAssignmentExcel,
  downloadCompressedAssignments,
  tokenReIssuance,
  getCompressedName,
} from '../../../lib/api/Admin/admin';
import { downloadBlobByClick } from '../../../lib/function/admin';

interface Props {
  assignmentId: number;
  title: string;
}

const SubjectButtons: FC<Props> = ({ assignmentId, title }): ReactElement => {
  const history = useHistory();
  const [excelLoading, setExcelLoading] = useState<boolean>(false);
  const [fileLoading, setFileLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleClickCompressedFile = async () => {
    try {
      toggleFileLoading();
      await getCompressedFilesAndDownload(assignmentId);
      toggleFileLoading();
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        await getCompressedFilesAndDownload(assignmentId);
        toggleFileLoading();
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  const getCompressedFilesAndDownload = useCallback(async (assignmentId: number) => {
    const { data } = await downloadCompressedAssignments(assignmentId, setProgress);
    const blob: Blob = new Blob([data], { type: 'application/json' });
    const name = await getCompressedName(assignmentId);
    downloadBlobByClick(blob, name.data.compressed_file_name);
  }, []);

  const handleClickExcel = async () => {
    try {
      toggleExcelLoading();
      await getExcelsAndDownload(assignmentId);
      toggleExcelLoading();
    } catch (err) {
      const code = err?.response?.status;
      if (code === 401) {
        await tokenReIssuance();
        await getExcelsAndDownload(assignmentId);
        toggleExcelLoading();
      } else if (code === 403) {
        history.push('/admin/login');
      }
    }
  };

  const getExcelsAndDownload = useCallback(async (assignmentId: number) => {
    await updateAssignmentExcel(assignmentId);
    const { data } = await downloadAssignmentExcel(assignmentId);
    const blob: Blob = new Blob([data], { type: 'application/json' });
    downloadBlobByClick(blob, `${title}.xls`);
  }, []);

  const toggleExcelLoading = useCallback(() => {
    setExcelLoading(prev => !prev);
  }, [excelLoading]);

  const toggleFileLoading = useCallback(() => {
    setFileLoading(prev => !prev);
  }, [fileLoading]);

  return (
    <S.SubjectButtonWrap>
      <S.SubjectButtonEdit to={`/admin/update/${assignmentId}`}>
        <S.SubjectButtonImg src={edit} alt='edit' title='edit' />
        수정
      </S.SubjectButtonEdit>
      <S.SubjectButton onClick={handleClickCompressedFile}>
        {fileLoading ? (
          <S.SubjectButtonImg src={defaultLoading} alt='loading' title='loading' />
        ) : (
          <S.SubjectButtonImg src={download} alt='download' title='download' />
        )}
        다운로드
        {fileLoading && <ButtonProgress progress={progress} />}
      </S.SubjectButton>
      <S.SubjectButton onClick={handleClickExcel}>
        {excelLoading ? (
          <S.SubjectButtonImg src={defaultLoading} alt='loading' title='loading' />
        ) : (
          <S.SubjectButtonImg src={excel} alt='excel' title='excel' />
        )}
        엑셀
        {excelLoading && <ButtonProgress progress={progress} />}
      </S.SubjectButton>
    </S.SubjectButtonWrap>
  );
};

export default SubjectButtons;
