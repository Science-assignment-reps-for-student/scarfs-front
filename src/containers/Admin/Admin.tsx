import React, { FC, ReactElement } from 'react';
import AdminHeaderContainer from '../AdminHeader/AdminHeader'
import { Admin } from '../../components';

interface Props { }

const AdminContainer: FC<Props> = (): ReactElement => {
  return <>
    <AdminHeaderContainer />
    <Admin />
  </>;
};

export default AdminContainer;
