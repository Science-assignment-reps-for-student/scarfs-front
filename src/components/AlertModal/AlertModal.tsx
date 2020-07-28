import React, { FC, ReactElement, MouseEvent } from 'react';
import NotifyModal from './NotifyModal';
import WarnModal from './WarnModal';

type AlertModalTypes = 'notify' | 'warn';

interface Props {
  type: AlertModalTypes;
  explain?: string;
  setValue: (val: boolean) => void;
}

const AlertModal: FC<Props> = ({ type, explain, setValue }): ReactElement => {
  const removeAlert = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.parentElement.parentElement.remove();
  };
  const onClickCheck = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(true);
    removeAlert(e);
  };
  const onClickCancel = (e: MouseEvent<HTMLButtonElement>) => {
    setValue(false);
    removeAlert(e);
  };

  return (
    <>
      {type === 'notify' ? (
        <NotifyModal onClickCheck={onClickCheck} explain={explain} onClickCancel={onClickCancel} />
      ) : (
        <WarnModal onClickCheck={onClickCheck} explain={explain} />
      )}
    </>
  );
};

export default AlertModal;
