import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { submitted, unSubmitted } from '../../../assets/Admin';

interface Props {
  student_id: number;
  student_number: string;
  name: string;
  submit: number;
}

const SubmitList: FC<Props> = ({ student_number, name, submit, student_id }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem className={submit ? 'submitted' : 'unSubmitted'}>
      <S.SubjectClsContentCommonItemText>{student_number}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {<img src={submit ? submitted : unSubmitted} alt='condition' title='condition' />}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default SubmitList;
