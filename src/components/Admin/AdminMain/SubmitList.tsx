import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { submitted, unSubmitted } from '../../../assets/Admin';

interface Props {
  studentId: string;
  name: string;
  submit: number;
}

const SubmitList: FC<Props> = ({ studentId, name, submit }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem className={submit ? 'submitted' : 'unSubmitted'}>
      <S.SubjectClsContentCommonItemText>{studentId}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>{name}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {<img src={submit ? submitted : unSubmitted} alt='condition' title='condition' />}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default SubmitList;
