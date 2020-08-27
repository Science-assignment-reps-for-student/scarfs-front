import React, { FC, ReactElement } from 'react';

import AdminHeaderContainer from './AdminHeaderContainer';

import { AdminCreate, AlertModal } from '../../components';

interface Props {}

const AdminCreateContainer: FC<Props> = (): ReactElement => {
  return (
    <AlertModal type='notify'>
      <AdminHeaderContainer />
      <AdminCreate />
    </AlertModal>
  );
};

export default AdminCreateContainer;
