import React, { FC, useCallback } from 'react';
import * as S from '../style';

interface Props {
  isAbleChange: (isAble: boolean) => void;
}

const ChattingOpenButton: FC<Props> = ({ isAbleChange }) => {
  const chattingOpen = useCallback(() => {
    isAbleChange(true);
  }, []);
  return <S.ChattingOpenButton onClick={chattingOpen} />;
};

export default ChattingOpenButton;
