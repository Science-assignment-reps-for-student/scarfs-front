import React, { FC, ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AdminHeaderContainer from './AdminHeaderContainer';

import { Admin } from '../../components';
import {
  fetchExperimentThunk,
  fetchPersonalThunk,
  fetchTeamThunk,
} from '../../modules/reducer/Admin';

interface Props {}

const AdminContainer: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPersonalThunk());
    dispatch(fetchTeamThunk());
    dispatch(fetchExperimentThunk());
  }, []);

  return (
    <>
      <AdminHeaderContainer />
      <Admin />
    </>
  );
};

export default AdminContainer;
