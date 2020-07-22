import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  student_number: string;
  name: string;
  last_message: string;
  current_date: string;
  read: boolean;
}

const TableRow: FC<Props> = ({
  current_date,
  last_message,
  name,
  read,
  student_number,
}): ReactElement => {
  return (
    <S.QnARow className={!read && 'unRead'}>
      <S.QnARowItem>{student_number}</S.QnARowItem>
      <S.QnARowItem>{name}</S.QnARowItem>
      <S.QnARowItem className={!read && 'unRead'}>{last_message}</S.QnARowItem>
      <S.QnARowItem>{current_date}</S.QnARowItem>
    </S.QnARow>
  );
};

export default TableRow;
