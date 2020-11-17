import React, { FC, ReactElement, MouseEvent, useRef, useEffect } from 'react';

import * as S from './style';

import { notification } from '../../assets/Admin';

interface Props {
  onClickCheck: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: (e: MouseEvent<HTMLButtonElement>) => void;
  explain: JSX.Element[];
}

const NotifyModal: FC<Props> = ({ onClickCheck, onClickCancel, explain }): ReactElement => {
  const buttonFocus = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonFocus) {
      buttonFocus.current.focus();
    }
  }, [buttonFocus]);

  return (
    <S.NotifyWrap>
      <S.AlertTitle>
        <img src={notification} alt='notification' title='notification' />
        <span>알림</span>
      </S.AlertTitle>
      <S.AlertExplain>{explain}</S.AlertExplain>
      <S.AlertButtonWrap>
        <S.AlertCheck ref={buttonFocus} onClick={onClickCheck}>
          확인
        </S.AlertCheck>
        <S.AlertCancel onClick={onClickCancel}>취소</S.AlertCancel>
      </S.AlertButtonWrap>
    </S.NotifyWrap>
  );
};

export default NotifyModal;
