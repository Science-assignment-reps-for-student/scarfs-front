import React, { FC, MutableRefObject, useEffect, useState } from 'react';
import { ChattingHeader } from './Header';
import { ChattingBody } from './Body';
import { ChattingInput } from './Input';
import * as S from './style';
import { ChattingContentType } from 'lib/api/Chatting/Chatting';

interface Props {
  isConnected: boolean;
  partner: string;
  chattingList: ChattingContentType[];
  input: string;
  isDelete: boolean;
  inputChange: (payload: string) => void;
  headerChange: (payload: string) => void;
  sendMessage: (payload: string) => void;
  chattingBodyRef: MutableRefObject<HTMLDivElement>;
  isDeleteChange: (payload: boolean) => void;
  isAble: boolean;
}

const Chatting: FC<Props> = ({
  partner,
  chattingList,
  input,
  inputChange,
  headerChange,
  sendMessage,
  chattingBodyRef,
  isConnected,
  isDelete,
  isDeleteChange,
  isAble,
}) => {
  const [animation, animationChange] = useState(false);
  const [open, openChange] = useState(false);
  useEffect(() => {
    if (isAble) {
      openChange(true);
      setTimeout(() => {
        animationChange(true);
      });
    } else {
      animationChange(false);
      setTimeout(() => {
        openChange(false);
      }, 300);
    }
  }, [isAble]);
  const setChattingClassName = (animation: boolean, open: boolean) => {
    const isOpen = open ? 'open' : 'close';
    const isAnimation = animation ? 'opening' : 'closing';
    return `${isOpen} ${isAnimation}`;
  };
  return (
    <S.ChattingWrapper>
      <div className={setChattingClassName(animation, open)}>
        <ChattingHeader selectedPerson={partner} headerChange={headerChange} />
        <ChattingBody
          chattingList={chattingList}
          chattingBodyRef={chattingBodyRef}
          isDeleteChange={isDeleteChange}
          isDelete={isDelete}
          isConnected={isConnected}
        />
        <ChattingInput
          value={input}
          inputChange={inputChange}
          sendMessage={sendMessage}
          isConnected={isConnected}
        />
      </div>
    </S.ChattingWrapper>
  );
};

export default Chatting;
