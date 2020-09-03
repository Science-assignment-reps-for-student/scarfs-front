import React, { FC, useCallback } from 'react';
import * as S from '../style';

interface Props {
  isAbleChange: (isAble: boolean) => void;
  alarmChange: (alaram: boolean) => void;
  alarm: boolean;
}

const ChattingOpenButton: FC<Props> = ({ isAbleChange, alarmChange, alarm }) => {
  const chattingOpen = useCallback(() => {
    isAbleChange(true);
    alarmChange(false);
  }, []);
  return <S.ChattingOpenButton onClick={chattingOpen} alarm={alarm} />;
};

export default ChattingOpenButton;
