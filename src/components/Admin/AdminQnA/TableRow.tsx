import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {
  user_number: string;
  user_name: string;
  user_id: number;
  message: string;
  message_time: string;
  show: boolean;
}

const TableRow: FC<Props> = ({
  message_time,
  message,
  user_name,
  user_id,
  show,
  user_number,
}): ReactElement => {
  return (
    <S.QnARow className={!show && 'unRead'} to={`/admin/qna/${user_id}`}>
      <S.QnARowText>{user_number}</S.QnARowText>
      <S.QnARowText>{user_name}</S.QnARowText>
      <S.QnARowText className={!show && 'unRead'}>{message}</S.QnARowText>
      <S.QnARowText>{message_time}</S.QnARowText>
    </S.QnARow>
  );
};

export default TableRow;
