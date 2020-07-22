import React, { FC, ReactElement, useState, ChangeEvent } from 'react';
import * as S from './style';
import Header from './Header';
import AdminTable from './Table';

interface Props {}

const AdminQnA: FC<Props> = (): ReactElement => {
  const [search, setSearch] = useState<string>('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <S.AdminQnAWrap>
      <S.QnACenter>
        <Header onChangeSearch={onChangeSearch} />
        <AdminTable search={search} />
      </S.QnACenter>
    </S.AdminQnAWrap>
  );
};

export default AdminQnA;
