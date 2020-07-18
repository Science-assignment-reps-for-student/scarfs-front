import React, { FC, ReactElement } from 'react';
import * as S from './style';
import submitted from '../../assets/Admin/adminO.svg';
import unSubmitted from '../../assets/Admin/adminX.svg';

interface Props {
  isPersonal: boolean;
  studentId: string;
  name: string;
  submit: number;
  teamName: string;
}

const ReportList: FC<Props> = ({ isPersonal, studentId, name, submit, teamName }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem className={!submit && 'unSubmit'}>
      {isPersonal && (
        <S.SubjectClsContentCommonItemText>{teamName}</S.SubjectClsContentCommonItemText>
      )}
      <S.SubjectClsContentCommonItemText>{studentId}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {teamName !== '' && (
          <img src={submit ? submitted : unSubmitted} alt='condition' title='condition' />
        )}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ReportList;
