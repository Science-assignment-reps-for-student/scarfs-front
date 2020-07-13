import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './style/global';
import { BoardRouter } from './routers';
import { NotFound } from './components';

const App: FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {/* <Route exact path='/' component={MainContainer} /> */}
        <Route path='/board' component={BoardRouter} />
        {/* <Route path='/admin' component={AdminRouter} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
