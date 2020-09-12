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
}) => {
  const [animation, animationChange] = useState(false);
  useEffect(() => {
    animationChange(true);
  }, []);
  return (
    <S.ChattingWrapper>
      <div className={animation ? 'move' : ''}>
        <ChattingHeader selectedPerson={partner} headerChange={headerChange} />
        <ChattingBody
          chattingList={chattingList}
          chattingBodyRef={chattingBodyRef}
          isDeleteChange={isDeleteChange}
          isDelete={isDelete}
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
