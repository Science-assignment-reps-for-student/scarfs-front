import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotifyModal from './NotifyModal';
import WarnModal from './WarnModal';
import {
  setReturnValue,
  deleteAlert,
  resetReturnValue,
  AlertModalTypes,
} from '../../modules/reducer/Alert';
import { ReducerType } from '../../modules/store';

interface Props {
  type: AlertModalTypes;
}

const AlertModal: FC<Props> = ({ type, children }): ReactElement => {
  const { isShow, explain } = useSelector((state: ReducerType) => state.Alert);
  const dispatch = useDispatch();

  const onClickCheck = () => {
    dispatch(setReturnValue(true));
    dispatch(deleteAlert());
  };
  const onClickCancel = () => {
    dispatch(setReturnValue(false));
    dispatch(deleteAlert());
  };

  const separateExplain = (explain: string) => {
    return explain
      .split('.')
      .filter((value: string) => value)
      .map((sentence: string, i: number) => <p key={sentence + i}>{sentence}.</p>);
  };

  useEffect(() => {
    return () => {
      dispatch(resetReturnValue());
      dispatch(deleteAlert());
    };
  }, []);

  return (
    <div>
      {isShow === true &&
        (type === 'notify' ? (
          <NotifyModal
            onClickCheck={onClickCheck}
            onClickCancel={onClickCancel}
            explain={separateExplain(explain)}
          />
        ) : (
          <WarnModal onClickCheck={onClickCheck} explain={separateExplain(explain)} />
        ))}
      {children}
    </div>
  );
};

export default AlertModal;
