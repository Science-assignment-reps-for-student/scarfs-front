import React, { FC, ReactElement } from 'react';
import AdminHeaderContainer from '../AdminHeader/AdminHeaderContainer';
import { AdminLogin } from '../../components';
interface Props {}

const AdminLoginContainer: FC<Props> = (): ReactElement => {
  return (
    <>
      <AdminHeaderContainer />
      <AdminLogin />  
    </>
  );
};

export default AdminLoginContainer;
