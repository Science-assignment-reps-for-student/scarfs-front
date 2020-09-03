import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  student_number: number;
  name: string;
}

const AdminQnAModal: FC<Props> = ({ student_number, name }): ReactElement => {
  return (
    <S.SectionListItem>
      <span>{student_number}</span>
      <span>{name}</span>
    </S.SectionListItem>
  );
};

export default AdminQnAModal;
