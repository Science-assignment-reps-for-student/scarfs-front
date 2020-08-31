import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { download, edit, excel } from '../../../assets/Admin';
import {
  downloadAssignmentFileIndex,
  downloadAssignmentExcel,
  updateAssignmentExcel,
  downloadAssignmentFiles,
} from '../../../lib/api/Admin/admin';

interface Props {
  assignmentId: number;
  typing: string;
}

const SubjectButtons: FC<Props> = ({ assignmentId, typing }): ReactElement => {
  const assignmentType = typing === '개인' ? 'personal' : typing === '팀' ? 'team' : 'experiment';

  const onClickDownloadFile = async () => {
    try {
      const fileIndex = await downloadAssignmentFileIndex(assignmentId, assignmentType);
      const files = await downloadAssignmentFiles(assignmentId, assignmentType);
      console.log(fileIndex, files);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickDownloadExcel = async () => {
    try {
      await updateAssignmentExcel(assignmentId, assignmentType);
      const excelRes = await downloadAssignmentExcel(assignmentId);
    } catch (err) {
      console.log(err);
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
