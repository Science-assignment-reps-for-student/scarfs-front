import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminO from '../../assets/Admin/adminO.svg';
import adminX from '../../assets/Admin/adminX.svg';

interface Props {
  isReport: boolean;
  i: number;
  studentId: string;
  name: string;
  submit: number;
}

const ClassListCommon: FC<Props> = ({ isReport, i, studentId, name, submit }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isReport && (
        <S.SubjectClsContentCommonItemText>
          {i % 4 === 0 && '팀이름'}
        </S.SubjectClsContentCommonItemText>
      )}
      <S.SubjectClsContentCommonItemText>{studentId}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {<img src={submit ? adminO : adminX} alt='condition' title='condition' />}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ClassListCommon;
