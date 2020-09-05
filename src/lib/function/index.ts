import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from '../../modules/reducer';
import { ErrorType } from '../../modules/reducer/Modal';
import { HeaderState } from '../../modules/reducer/Header';
import * as Type from '../../lib/type';
import {
  ClassBoardWriteState,
  setWriteBoardClassNumber,
} from '../../modules/reducer/ClassBoardWrite';
import { MainState, setAssignmentClassNumber } from '../../modules/reducer/Main';

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

export const stateChange = <ValueType>(actionFunc: (value: ValueType) => any) => {
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
      return '올바른 이메일인지 확인해 주세요.';
    }
    case 'SignUpPasswordRegexError': {
      return '비밀번호에 특수문자와 대문자를 넣어주세요.';
    }
    case 'TimeOutError': {
      return '세션이 만료되었습니다. 처음부터 진행해 주세요.';
    }
    default:
      return '';
  }
};

export const isNetworkError = (error: Type.ErrorType | null): boolean => {
  if (!error) return;
  if (error.message === 'Network Error') {
    return true;
  }
  return false;
};

export const readFileAsDataURL = async (file: File) => {
  let result = await new Promise(resolve => {
    let reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
  return result as string;
};

export const useUser = () => {
  const { userInfo } = useSelector(getStateCallback<HeaderState>('Header'));
  if (userInfo === null)
    return {
      name: '',
      studentNumber: 0,
      remainingAssignment: 0,
      completionAssignment: 0,
      classNumber: 0,
      id: 0,
      type: 'STUDENT',
    };
  const returnValue = {
    ...userInfo,
    classNumber: parseInt(userInfo.studentNumber.toString().split('')[1]),
  };
  return returnValue;
};

export const useWriteClassNumber = (): [number, (classNumber: number) => void] => {
  const dispatch = useDispatch();
  const { classNumber } = useSelector(getStateCallback<ClassBoardWriteState>('ClassBoardWrite'));

  const setClassNumber = (classNumber: number) => {
    dispatch(setWriteBoardClassNumber(classNumber));
  };

  return [classNumber, setClassNumber];
};

export const useAssignmentClassNumber = (): [number, (classNumber: number) => void] => {
  const dispatch = useDispatch();
  const { assignmentClassNumber } = useSelector(getStateCallback<MainState>('Main'));

  const setClassNumber = (classNumber: number) => {
    dispatch(setAssignmentClassNumber(classNumber));
  };

  return [assignmentClassNumber, setClassNumber];
};

export const isAbleFileExt = (name: string) => {
  const fileExtends: string = '.hwp.jpg.png.jpeg.pptx.word.pdf.zip';
  const splitName = name.split('.');
  return fileExtends
    .split('.')
    .some(ext => ext === splitName[splitName.length - 1].toLocaleLowerCase());
};
