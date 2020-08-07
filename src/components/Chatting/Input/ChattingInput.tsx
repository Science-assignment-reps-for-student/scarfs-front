import React, { FC, useCallback } from 'react';
import * as S from '../style';

interface Props {
  inputChange: (value: string) => void;
  value: string;
}

const ChattingInput: FC<Props> = ({ value, inputChange }) => {
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    inputChange(value);
  }, []);
  return (
    <S.ChattingInputDiv>
      <S.ChattingInput>
        <input value={value} onChange={inputChangeHandler} />
        <S.ChattingSendButton />
      </S.ChattingInput>
    </S.ChattingInputDiv>
  );
};

export default ChattingInput;
