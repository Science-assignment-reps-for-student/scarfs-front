import React, { FC, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AdminQnA } from '../../components';
import { AdminHeaderContainer } from './';

interface Props {}

const AdminQnAContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      history.push('/admin/login');
    }
  }, []);

  return (
    <>
      <AdminHeaderContainer />
      <AdminQnA />
    </>
  );
};

export default AdminQnAContainer;
