import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './style/global';

const App: FC = (): React.ReactElement => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch></Switch>
  </BrowserRouter>
);

export default App;
