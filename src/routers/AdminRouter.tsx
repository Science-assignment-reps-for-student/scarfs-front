import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  AdminContainer,
  AdminLoginContainer,
  AdminCreateContainer,
  AdminQnAContainer,
} from '../containers';
import { NotFound } from '../components';

const AdminRouter: FC = (): ReactElement => {
  return (
    <Switch>
      <Route path='/admin/login' component={AdminLoginContainer} />
      <Route path='/admin/create' component={AdminCreateContainer} />
      <Route path='/admin/qna' component={AdminQnAContainer} />
      <Route path='/admin/*' component={NotFound} />
      <Route path='/admin' component={AdminContainer} />
    </Switch>
  );
};

export default AdminRouter;
