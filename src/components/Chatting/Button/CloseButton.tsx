import React, { FC, useCallback } from 'react';
import * as S from '../style';

interface Props {
  isAbleChange: (isAble: boolean) => void;
  alarm: boolean;
}

const ChattingCloseButton: FC<Props> = ({ isAbleChange, alarm }) => {
  const chattingOpen = useCallback(() => {
    isAbleChange(false);
  }, []);
  return <S.ChattingCloseButton onClick={chattingOpen} alarm={alarm} />;
};

export default ChattingCloseButton;
