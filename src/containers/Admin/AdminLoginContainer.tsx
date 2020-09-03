import React, { FC, ReactElement, useReducer, ChangeEvent, Reducer, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

import { AdminLogin, AlertModal } from '../../components';
import { AdminHeaderContainer } from '../../containers';
import { createAlert } from '../../modules/reducer/Alert';
import { modalLoginExplains, fetchLoginThunk } from '../../modules/reducer/AdminLogin/index';
import {
  loginReducer,
  loginInit,
  Login,
  LoginType,
} from '../../modules/reducer/AdminLogin/reducer';

interface Props {}

const AdminLoginContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loginState, loginDispatch] = useReducer<Reducer<Login, LoginType>>(
    loginReducer,
    loginInit,
  );
  const {
    checkLogin,
    notExisted,
    notFoundError,
    wrongAccount,
    notConnectNetwork,
  } = modalLoginExplains;

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    loginDispatch({ type: e.target.name, payload: { value: e.target.value } });
  };

  const isInputEmpty = ({ ID, PW }: Login): boolean => ID === '' && PW === '';

  const onClickLogin = useCallback(async () => {
    if (isInputEmpty(loginState)) {
      dispatch(createAlert(checkLogin));
      return;
    }

    dispatch(
      fetchLoginThunk(history, loginState, (err: AxiosError) => {
        if ((err.toJSON() as { message: string }).message === 'Network Error') {
          dispatch(createAlert(notConnectNetwork));
          return;
        }
        const code = err.response.status;
        if (code === 400) {
          dispatch(createAlert(notExisted));
        } else if (code === 401) {
          dispatch(createAlert(wrongAccount));
        } else {
          dispatch(createAlert(notFoundError));
        }
      }),
    );
  }, [loginState]);

  return (
    <AlertModal type='warn'>
      <AdminHeaderContainer />
      <AdminLogin onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} />
    </AlertModal>
  );
};

export default AdminLoginContainer;
