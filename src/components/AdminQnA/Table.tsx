import React, { FC, ReactElement, useMemo } from 'react';
import * as S from './style';
import TableRow from './TableRow';

interface Props {
  search: string;
}

interface QnAStudent {
  student_number: number;
  name: string;
  last_message: string;
  current_date: string;
  read: boolean;
}

const students: QnAStudent[] = Array(20)
  .fill(0)
  .map((_, i) => ({
    student_number: parseInt(`11${i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}`),
    name: `이성진${i + 1}`,
    last_message: '마지막 메시지',
    current_date: '2020.07.23',
    read: i < 3 ? false : true,
  }));

const AdminTable: FC<Props> = ({ search }): ReactElement => {
  const studentsTable = useMemo(
    () =>
      students
        .filter(
          ({ name, student_number }) =>
            search === '' || search.match(student_number.toString()) || search.match(name),
        )
        .map(({ student_number, name, last_message, current_date, read }) => {
          return (
            <TableRow
              key={student_number}
              student_number={student_number.toString()}
              name={name}
              current_date={current_date}
              last_message={last_message}
              read={read}
            />
          );
        }),
    [search],
  );

  return (
    <S.QnATableWrap>
      <S.QnATable>
        <TableRow
          name={'이름'}
          student_number={'학번'}
          last_message={'메시지'}
          current_date={'최근날짜'}
          read={true}
        />
        {studentsTable}
      </S.QnATable>
    </S.QnATableWrap>
  );
};

export default AdminTable;
