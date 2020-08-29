import React, { FC, ReactElement } from 'react';

import { AdminHeaderContainer } from './';

import { AdminQnA } from '../../components';

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
