import React, { FC, ReactElement } from 'react';
import AdminCreate from '../../components/AdminCreate/AdminCreate';
import AdminHeaderContainer from './AdminHeaderContainer';
interface Props {}

const AdminCreateContainer: FC<Props> = (): ReactElement => {
  return (
    <>
      <AdminHeaderContainer />
      <AdminCreate />
    </>
  );
};

export default AdminCreateContainer;
