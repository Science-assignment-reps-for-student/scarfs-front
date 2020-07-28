import React, { FC, ReactElement, MouseEvent } from 'react';
import { warning } from '../../assets/Admin';
import * as S from './style';

interface Props {
  explain: string;
  onClickCheck: (e: MouseEvent<HTMLButtonElement>) => void;
}

const WarnModal: FC<Props> = ({
  onClickCheck,
  explain = '모든 빈칸을 채워주세요.',
}): ReactElement => {
  return (
    <S.AlertModalWrap>
      <S.AlertTitle>
        <img src={warning} alt='warning' title='warning' />
        <span>경고</span>
      </S.AlertTitle>
      <S.AlertExplain>{explain}</S.AlertExplain>
      <S.AlertButtonWrap>
        <S.AlertCheck onClick={onClickCheck}>확인</S.AlertCheck>
      </S.AlertButtonWrap>
    </S.AlertModalWrap>
  );
};

export default WarnModal;
