import React, { FC, ReactElement, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NotifyModal from './NotifyModal';
import WarnModal from './WarnModal';

import { ReducerType } from '../../modules/store';
import {
  setReturnValue,
  deleteAlert,
  resetReturnValue,
  AlertModalTypes,
} from '../../modules/reducer/Alert';

interface Props {
  type: AlertModalTypes;
}

const AlertModal: FC<Props> = ({ type, children }): ReactElement => {
  const { isShow, explain, checkCallback, cancelCallback } = useSelector(
    (state: ReducerType) => state.Alert,
  );
  const dispatch = useDispatch();

  const onClickCheck = useCallback(() => {
    checkCallback();
    dispatch(setReturnValue(true));
    dispatch(deleteAlert());
  }, [checkCallback]);
  const onClickCancel = useCallback(() => {
    cancelCallback();
    dispatch(setReturnValue(false));
    dispatch(deleteAlert());
  }, [cancelCallback]);

  const separateExplain = (explain: string) => {
    return explain
      .split('\n')
      .filter((value: string) => value)
      .map((sentence: string, i: number) => <p key={sentence + i}>{sentence}</p>);
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
