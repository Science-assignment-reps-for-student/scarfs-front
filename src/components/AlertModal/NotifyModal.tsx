import React, { FC, ReactElement, MouseEvent } from 'react';
import { notification } from '../../assets/Admin';
import * as S from './style';

interface Props {
  onClickCheck: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickCancel: (e: MouseEvent<HTMLButtonElement>) => void;
  explain: string;
}

const NotifyModal: FC<Props> = ({
  onClickCheck,
  onClickCancel,
  explain = '모든 빈칸을 채워주세요.',
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
