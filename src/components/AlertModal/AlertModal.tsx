import React, { FC, ReactElement } from 'react';
import { warning, notification } from '../../assets/Admin';
import * as S from './style';

type AcceptTypes = 'warn' | 'notify';

interface Props {
  type: AcceptTypes;
}

const AlertModal: FC<Props> = ({ type }): ReactElement => {
  // Warning, Notification

  enum Images {
    warn = warning,
    notify = notification,
  }

  Images['warn'];

  return (
    <div>
      <div className='back'></div>
      <p>
        <img src={notification} alt='notification' title='notification' />
        <span>알림</span>
      </p>
      <p>모든 빈칸을 채워주세요.</p>
      <div>
        <button>확인</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default AlertModal;
