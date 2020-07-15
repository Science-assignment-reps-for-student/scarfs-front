import React, { FC, ReactElement, useState, MouseEvent } from 'react';
import * as S from './style';
import AdminSection from './Section';
import AdminAside from './Aside';

interface Props {}
interface Filter {
  class1: boolean;
  class2: boolean;
  class3: boolean;
  class4: boolean;
  personal: boolean;
  team: boolean;
  experiment: boolean;
}

const Admin: FC<Props> = (): ReactElement => {
  const initFilter = {
    class1: true,
    class2: true,
    class3: true,
    class4: true,
    personal: true,
    team: true,
    experiment: true,
  };
  const [filter, setFilter] = useState<Filter>(initFilter);

  const toggleFilter = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const id = e.currentTarget.id;
    setFilter({
      ...filter,
      [id]: !filter[id],
    });
  };

  return (
    <S.AdminWrap>
      <S.AdminTitle>제출현황</S.AdminTitle>
      <S.AdminContent>
        <AdminSection />
        <AdminAside toggleFilter={toggleFilter} />
      </S.AdminContent>
    </S.AdminWrap>
  );
};

export default Admin;
