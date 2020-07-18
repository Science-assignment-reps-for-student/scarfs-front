import React, { FC, ReactElement } from 'react';
import { AdminHeader } from '../../components';

interface Props {}

const AdminHeaderContainer: FC<Props> = (): ReactElement => {
  return <AdminHeader />;
};

export default AdminHeaderContainer;
