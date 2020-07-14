import React, { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { UserRouter } from './routers';
import { NotFound } from './components';

const App: FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/error' component={NotFound} />
        {/* <Route path='/admin' component={AdminRouter} /> */}
        <Route path='/' component={UserRouter} />
        <Redirect path='*' to='/error' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
