import React, { FC, ReactElement } from 'react';
import { AdminQnA } from '../../components';
import { AdminHeaderContainer } from './';

interface Props {}

const AdminQnAContainer: FC<Props> = (): ReactElement => {
  return (
    <>
      <AdminHeaderContainer />
      <AdminQnA />
    </>
  );
};

export default AdminQnAContainer;
