import { useDispatch } from 'react-redux';
import { reducerType } from '../../modules/reducer';

export const isEmpty = (text: string) => {
  if (text.length > 0) {
    return false;
  }
  return true;
};

export const getStateCallback = (stateName: string) => (state: reducerType) => {
  return state[stateName];
};

export const stateChange = <ValueType>(actionFunc: (ValueType) => any) => {
  const dispatch = useDispatch();
  return (value?: ValueType) => dispatch(actionFunc(value));
};
