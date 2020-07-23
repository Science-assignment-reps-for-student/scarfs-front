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
    <S.QnARow className={!read && 'unRead'} to={`/admin/qna/${student_number}`}>
      <S.QnARowText>{student_number}</S.QnARowText>
      <S.QnARowText>{name}</S.QnARowText>
      <S.QnARowText className={!read && 'unRead'}>{last_message}</S.QnARowText>
      <S.QnARowText>{current_date}</S.QnARowText>
    </S.QnARow>
  );
};

export default TableRow;
