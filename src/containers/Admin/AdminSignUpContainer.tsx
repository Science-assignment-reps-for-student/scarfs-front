import React, {
  FC,
  ReactElement,
  Reducer,
  ChangeEvent,
  useReducer,
  useState,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { AlertModal, AdminSignUp } from '../../components';
import { SignUp, signUpReducer, signUpInit, SignUpAction } from '../../modules/reducer/AdminSignUp';
import { createAlert } from '../../modules/reducer/Alert';
import { apiSignUp } from '../../lib/api/Admin/signUp';

interface Props {}

const AdminSignUpContainer: FC<Props> = (): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [signUpState, signUpDispatch] = useReducer<Reducer<SignUp, SignUpAction>>(
    signUpReducer,
    signUpInit,
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    signUpDispatch({ type: e.target.name.toUpperCase(), payload: { val: e.target.value } });
  };

  const onClickRegister = useCallback(async () => {
    if (isInputEmpty(signUpState)) {
      dispatch(createAlert('모든 입력창에 입력해주세요.'));
      return;
    }
    if (!isPasswordMatched(signUpState)) {
      dispatch(createAlert('비밀번호가 일치하지 않습니다.'));
      return;
    }
    reqRegister(signUpState);
  }, [signUpState]);

  const reqRegister = useCallback(async (signUp: SignUp) => {
    setLoading(true);
    try {
      await apiSignUp(signUp);
      setLoading(false);
      dispatch(createAlert('회원가입이 완료되었습니다.'));
      history.push('/admin/login');
    } catch (err) {
      setLoading(false);
      const code = err?.response?.status;
      if (!code) return;
      if (code === 409) {
        dispatch(createAlert('이미 존재하는 이메일입니다. 다른 이메일을 사용해주세요.'));
      } else {
        dispatch(createAlert('오류가 발생하였습니다. 잠시 후 다시 시도해주세요.'));
      }
    }
  }, []);

  const isInputEmpty = (signUp: SignUp) =>
    Object.keys(signUp).some(input => signUpState[input] === '');
  const isPasswordMatched = ({ password, confirmPassword }: SignUp) => password === confirmPassword;

  return (
    <AlertModal type='warn'>
      <AdminSignUp
        onChangeInput={onChangeInput}
        onClickRegister={onClickRegister}
        loading={loading}
      />
    </AlertModal>
  );
};

export default AdminSignUpContainer;
