import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chatting, { ChattingOpenButton } from '../../components/Chatting';
import { getStateCallback } from '../../lib/function';
import { ChattingState, setIsAble } from '../../modules/reducer/Chatting';

const ChattingContainer: FC = () => {
  const dispatch = useDispatch();
  const { isAble } = useSelector(getStateCallback<ChattingState>('Chatting'));
  const isAbleChange = useCallback((isAble: boolean) => {
    dispatch(setIsAble(isAble));
  }, []);
  return isAble ? <Chatting /> : <ChattingOpenButton isAbleChange={isAbleChange} />;
};

export default ChattingContainer;
