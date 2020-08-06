import { useDispatch } from 'react-redux';
import { reducerType } from '../../modules/reducer';
import { ErrorType } from '../../modules/reducer/Modal';

export const isTextEmpty = (text: string): boolean => {
  if (text.length > 0) {
    return false;
  }
  return true;
};

export const getStateCallback = <ReturnType>(stateName: string) => (
  state: reducerType,
): ReturnType => {
  const selectedStaet: ReturnType = state[stateName];
  return selectedStaet;
};

export const stateChange = <ValueType>(actionFunc: (ValueType) => any) => {
  const dispatch = useDispatch();
  return (value?: ValueType) => {
    dispatch(actionFunc(value));
  };
};

export const getModalErrorText = (error: ErrorType) => {
  switch (error) {
    case 'CodeError': {
      return '인증번호를 다시 한번 확인해 주세요.';
    }
    case 'SignInError': {
      return '이메일이나 패스워드를 다시 확인해주세요.';
    }
    case 'SignUpInfoError': {
      return '학번, 이름, 인증번호를 다시 확인해주세요.';
    }
    case 'SignUpPasswordError': {
      return '비밀번호가 똑같지 않습니다.';
    }
    case 'SignUpEmailError': {
      return '올바른 이메일인지 확인해 주세요';
    }
    default:
      return '';
  }
};

export const readFileAsDataURL = async (file: File) => {
  let result = await new Promise(resolve => {
    let reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
  return result as string;
};
