import React, { FC, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { BoardRouter } from './';
import {
  HeaderContainer,
  MainContainer,
  WaveContainer,
  ModalContainer,
  ChattingContainer,
} from '../containers';
import { Banner } from './style';
import { stateChange, getStateCallback } from '../lib/function';
import ModalState, { reset } from '../modules/reducer/Modal';
import { useSelector } from 'react-redux';

const UserRouter: FC = () => {
  const location = useLocation();
  const closeModal = stateChange(reset);
  const { modal } = useSelector(getStateCallback<ModalState>('Modal'));
  const history = useHistory();
  useEffect(() => {
    if (modal) closeModal();
  }, [location]);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken || accessToken.length <= 0) {
      history.push('/');
    }
  }, []);
  return (
    <>
      <ChattingContainer />
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
