import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotifyModal from './NotifyModal';
import WarnModal from './WarnModal';
import { setReturnValue, deleteAlert, resetReturnValue } from '../../modules/reducer/Alert';
import { ReducerType } from 'src/modules/store';

type AlertModalTypes = 'notify' | 'warn';

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
            explain={explain}
          />
        ) : (
          <WarnModal onClickCheck={onClickCheck} explain={explain} />
        ))}
      {children}
    </div>
  );
};

export default AlertModal;
