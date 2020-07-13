import React, { FC, ReactElement } from 'react';
import * as S from './style';
import AdminSection from './Section';
import AdminAside from './Aside';

interface Props {}

const Admin: FC<Props> = (): ReactElement => {
  return (
    <S.AdminWrap>
      <S.AdminTitle>제출현황</S.AdminTitle>
      <S.AdminContent>
        <AdminSection />
        <AdminAside />
      </S.AdminContent>
    </S.AdminWrap>
  );
};

export default Admin;
