import React, { FC, ReactElement, MouseEvent } from 'react';

import * as S from './style';

import { warning } from '../../assets/Admin';

interface Props {
  onClickCheck: (e: MouseEvent<HTMLButtonElement>) => void;
  explain: JSX.Element[];
}

const WarnModal: FC<Props> = ({ onClickCheck, explain }): ReactElement => {
  return (
    <S.WarnWrap>
      <S.AlertTitle>
        <img src={warning} alt='warning' title='warning' />
        <span>경고</span>
      </S.AlertTitle>
      <S.AlertExplain>{explain}</S.AlertExplain>
      <S.AlertButtonWrap>
        <S.AlertCheck onClick={onClickCheck}>확인</S.AlertCheck>
      </S.AlertButtonWrap>
    </S.WarnWrap>
  );
};

export default WarnModal;
