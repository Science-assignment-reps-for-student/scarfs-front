import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BoardRouter } from './';
import { HeaderContainer, MainContainer, WaveContainer, ModalContainer } from '../containers';
import { Banner } from './style';

const UserRouter: FC = () => {
  return (
    <>
      <HeaderContainer />
      <ModalContainer />
      <Banner />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route path='/board' component={BoardRouter} />
        <Redirect path='*' to='/error' />
      </Switch>
      <WaveContainer />
    </>
  );
};

export default UserRouter;
