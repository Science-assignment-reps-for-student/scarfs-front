import React, { FC, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { UserRouter, AdminRouter } from './routers';
import { NotFound } from './components';

const App: FC = (): React.ReactElement => {
  const history = useHistory();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (typeof accessToken === 'undefined') return;
    if (accessToken.length <= 0) {
      history.push('/');
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/error' component={NotFound} />
        <Route path='/admin' component={AdminRouter} />
        <Route path='/' component={UserRouter} />
        <Redirect path='*' to='/error' />
      </Switch>
    </>
  );
};

export default App;
