import React, { FC, ReactElement, useState, ChangeEvent, MouseEvent } from 'react';
import * as S from './style';
import Header from './Header';
import AdminTable from './Table';
import Modal from './Modal';

interface Props {}

const AdminQnA: FC<Props> = (): ReactElement => {
  const [search, setSearch] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const onClickToggleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <S.AdminQnAWrap>
      <S.QnACenter>
        <Header onChangeSearch={onChangeSearch} onClickToggleModal={onClickToggleModal} />
        <AdminTable search={search} />
      </S.QnACenter>
      {modal && <Modal onClickToggleModal={onClickToggleModal} />}
    </S.AdminQnAWrap>
  );
};

export default AdminQnA;
