import React, { FC } from 'react';
import * as S from '../style';

const ChattingInput: FC = () => {
  return (
    <S.ChattingInputDiv>
      <S.ChattingInput>
        <input />
        <S.ChattingSendButton />
      </S.ChattingInput>
    </S.ChattingInputDiv>
  );
};

export default ChattingInput;
