import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './containers';
import GlobalStyle from './style/global';

const App: FC = (): React.ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route render={Main} path="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
