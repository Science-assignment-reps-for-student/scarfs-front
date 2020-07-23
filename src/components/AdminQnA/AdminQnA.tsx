import React, { FC, ReactElement, useState, ChangeEvent } from 'react';
import * as S from './style';
import Header from './Header';
import AdminTable from './Table';
import Modal from './Modal';
import Chat from './Chat';
import { useParams } from 'react-router-dom';

interface Props {}

const AdminQnA: FC<Props> = (): ReactElement => {
  const { student_number } = useParams();
  const [search, setSearch] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const onClickToggleModal = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      {student_number ? (
        <Chat />
      ) : (
        <S.AdminQnAWrap>
          <S.QnACenter>
            <Header onChangeSearch={onChangeSearch} onClickToggleModal={onClickToggleModal} />
            <AdminTable search={search} />
          </S.QnACenter>
          {modal && <Modal onClickToggleModal={onClickToggleModal} />}
        </S.AdminQnAWrap>
      )}
    </>
  );
};

export default AdminQnA;
