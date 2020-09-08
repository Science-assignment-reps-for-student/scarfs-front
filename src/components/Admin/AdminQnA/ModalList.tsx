import React, { FC, ReactElement, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import * as S from './style';
import ModalItem from './ModalItem';

import { apiChatModalUsers, ChatUsers } from '../../../lib/api/Admin/qna';
import { reducerType } from '../../../modules/reducer';

interface Props {}

const AdminQnAModal: FC<Props> = (): ReactElement => {
  const { logs } = useSelector((state: reducerType) => state.AdminQnA);
  const [modalUsers, setModalUsers] = useState<ChatUsers>([]);

  const getChatUsers = async () => {
    const { data } = await apiChatModalUsers();
    setModalUsers(data);
  };

  const filteredModalsUsers = useMemo(() => {
    const filtered = modalUsers
      .filter(({ id }) => logs.findIndex(({ user_id }) => user_id === id) === -1)
      .sort((a, b) => (a.number > b.number ? 1 : -1));
    let flag = 0;
    return filtered.map(({ id, name, number }, i: number) => {
      if (parseInt(filtered[i].number.charAt(1)) !== flag) {
        flag += 1;
        return (
          <div key={id}>
            <h3>{flag}반</h3>
            <ModalItem id={id} name={name} user_number={number} />
          </div>
        );
      }
      return <ModalItem key={id} id={id} name={name} user_number={number} />;
    });
  }, [modalUsers]);

  useEffect(() => {
    getChatUsers();
  }, []);

  return (
    <S.ModalSection>
      <S.SectionList>{filteredModalsUsers}</S.SectionList>
    </S.ModalSection>
  );
};

export default AdminQnAModal;
