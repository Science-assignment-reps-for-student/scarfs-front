import React, { FC, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AdminCreate from '../../components/AdminCreate/AdminCreate';
import AdminHeaderContainer from './AdminHeaderContainer';
interface Props {}

const AdminCreateContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      history.push('/admin/login');
    }
  }, []);

  return (
    <>
      <AdminHeaderContainer />
      <AdminCreate />
    </>
  );
};

export default AdminCreateContainer;
