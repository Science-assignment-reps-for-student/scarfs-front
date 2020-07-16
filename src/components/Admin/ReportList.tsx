import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminO from '../../assets/Admin/adminO.svg';
import adminX from '../../assets/Admin/adminX.svg';

interface Props {
  isPersonal: boolean;
  studentId: string;
  name: string;
  submit: number;
  teamName: string;
  j: number;
}

const ReportList: FC<Props> = ({
  isPersonal,
  studentId,
  name,
  submit,
  teamName,
  j,
}): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem className={!submit && 'unSubmit'}>
      {isPersonal && (
        <S.SubjectClsContentCommonItemText>{teamName}</S.SubjectClsContentCommonItemText>
      )}
      <S.SubjectClsContentCommonItemText>{studentId}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {j === 0 && <img src={submit ? adminO : adminX} alt='condition' title='condition' />}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ReportList;
