import React, { FC, ReactElement, MouseEvent } from 'react';
import * as S from './style';

import { notification } from '../../assets/Admin';

interface Props {
  onClickCheck: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: (e: MouseEvent<HTMLButtonElement>) => void;
  explain: JSX.Element[];
}

const NotifyModal: FC<Props> = ({
  onClickCheck,
  onClickCancel,
  explain = '오류가 발생하였습니다. 잠시 후 다시 시도해주세요.',
}): ReactElement => {
  return (
    <S.NotifyWrap>
      <S.AlertTitle>
        <img src={notification} alt='notification' title='notification' />
        <span>알림</span>
      </S.AlertTitle>
      <S.AlertExplain>{explain}</S.AlertExplain>
      <S.AlertButtonWrap>
        <S.AlertCheck onClick={onClickCheck}>확인</S.AlertCheck>
        <S.AlertCancel onClick={onClickCancel}>취소</S.AlertCancel>
      </S.AlertButtonWrap>
    </S.NotifyWrap>
  );
};

export default NotifyModal;
