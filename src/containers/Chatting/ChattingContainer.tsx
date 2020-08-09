import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderState from 'src/modules/reducer/Header';
import Chatting, { ChattingOpenButton } from '../../components/Chatting';
import { getStateCallback } from '../../lib/function';
import { ChattingState, setIsAble } from '../../modules/reducer/Chatting';

const ChattingContainer: FC = () => {
  const dispatch = useDispatch();
  const { isAble } = useSelector(getStateCallback<ChattingState>('Chatting'));
  const { isLogin } = useSelector(getStateCallback<HeaderState>('Header'));
  const isAbleChange = useCallback((isAble: boolean) => {
    dispatch(setIsAble(isAble));
  }, []);
  return isLogin ? (
    isAble ? (
      <Chatting />
    ) : (
      <ChattingOpenButton isAbleChange={isAbleChange} />
    )
  ) : (
    <></>
  );
};

export default ChattingContainer;
