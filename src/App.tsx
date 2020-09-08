import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { UserRouter, AdminRouter } from './routers';
// import { NotFound } from './components';

const App: FC = (): React.ReactElement => {
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
