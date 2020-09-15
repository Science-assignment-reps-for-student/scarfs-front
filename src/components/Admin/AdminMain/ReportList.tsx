import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { submitted, unSubmitted } from '../../../assets/Admin';

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
        <img src={submit ? submitted : unSubmitted} alt='condition' title='condition' />
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ReportList;
