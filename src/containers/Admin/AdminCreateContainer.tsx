import React, { FC, ReactElement } from 'react';

import AdminHeaderContainer from './AdminHeaderContainer';

import { AdminCreate } from '../../components';

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
