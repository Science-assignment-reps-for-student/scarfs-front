import React, { FC, ReactElement, useEffect } from 'react';
import AdminHeaderContainer from '../AdminHeader/AdminHeader';
import { Admin } from '../../components';
import { useDispatch } from 'react-redux';
import {
  fetchExperimentThunk,
  fetchPersonalThunk,
  fetchTeamThunk,
} from '../../modules/reducer/Admin/admin';

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
