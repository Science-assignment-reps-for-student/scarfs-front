import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {
  user_number: string;
  name: string;
  id: number;
}

const AdminQnAModal: FC<Props> = ({ user_number, name, id }): ReactElement => {
  return (
    <S.SectionListItem to={`/admin/qna/${id}`}>
      <span>{user_number}</span>
      <span>{name}</span>
    </S.SectionListItem>
  );
};

export default AdminQnAModal;
