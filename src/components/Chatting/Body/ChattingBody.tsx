import React, { FC, useCallback } from 'react';
import * as S from '../style';
import ChattingBodyContent from './ChattingBodyContent';
import { ChattingContentType } from '../../../modules/reducer/Chatting';

interface Props {
  chattingList: ChattingContentType[];
}

const ChattingBody: FC<Props> = ({ chattingList }) => {
  const setChattingList = useCallback((chattingList: ChattingContentType[]) => {
    const buffer = chattingList.map(chatting => {
      const { text, isMine } = chatting;
      return <ChattingBodyContent text={text} isMine={isMine} />;
    });
    return buffer;
  }, []);
  return (
    <S.ChattingBody>
      <div>{setChattingList(chattingList)}</div>
    </S.ChattingBody>
  );
};

export default ChattingBody;
