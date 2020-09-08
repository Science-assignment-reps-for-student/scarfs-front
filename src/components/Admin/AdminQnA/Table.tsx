import React, { FC, ReactElement, useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import TableRow from './TableRow';

import { reducerType } from '../../../modules/reducer';

interface Props {
  search: string;
}

const AdminTable: FC<Props> = ({ search }): ReactElement => {
  const { logs } = useSelector((state: reducerType) => state.AdminQnA);

  const chatLogs = useMemo(() => {
    return logs
      .filter(
        ({ user_name, user_number }) =>
          search === '' || search.match(user_number.toString()) || search.match(user_name),
      )
      .map(({ user_number, user_id, user_name, message, message_time, show }) => {
        return (
          <TableRow
            key={user_id}
            user_number={user_number.toString()}
            user_name={user_name}
            user_id={user_id}
            message_time={message_time}
            message={message}
            show={show}
          />
        );
      });
  }, [logs, search]);

  return (
    <S.QnATableWrap>
      <S.QnATable>
        <S.QnARowHead>
          <S.QnARowText>학번</S.QnARowText>
          <S.QnARowText>이름</S.QnARowText>
          <S.QnARowText>메시지</S.QnARowText>
          <S.QnARowText>최근날짜</S.QnARowText>
        </S.QnARowHead>
        {chatLogs}
      </S.QnATable>
    </S.QnATableWrap>
  );
};

export default AdminTable;
