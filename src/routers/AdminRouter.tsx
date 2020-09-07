import React, { FC, ReactElement, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import {
  AdminContainer,
  AdminLoginContainer,
  AdminCreateContainer,
  AdminQnAContainer,
  AdminSignUpContainer,
} from '../containers';
import { NotFound } from '../components';
import { getUserInfo } from '../lib/api/Admin/admin';

const AdminRouter: FC = (): ReactElement => {
  const history = useHistory();

  const isAdmin = async (): Promise<boolean> => {
    try {
      const {
        data: { type },
      } = await getUserInfo();
      if (type === 'ADMIN') return true;
      return false;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const splitPath = history.location.pathname.split('/');
    const lastPath = splitPath[splitPath.length - 1];
    if ((lastPath === 'register') !== !localStorage.getItem('accessToken') || isAdmin()) {
      history.push('/admin/login');
    }
  }, []);

  return (
    <Switch>
      <Route path='/admin/register' component={AdminSignUpContainer} />
      <Route path='/admin/login' component={AdminLoginContainer} />
      <Route path='/admin/create' component={AdminCreateContainer} />
      <Route path='/admin/update/:assignmentId' component={AdminCreateContainer} />
      <Route path='/admin/qna/:user_id' component={AdminQnAContainer} />
      <Route path='/admin/qna' component={AdminQnAContainer} />
      <Route path='/admin/*' component={NotFound} />
      <Route path='/admin' component={AdminContainer} />
    </Switch>
  );
};

export default AdminRouter;
