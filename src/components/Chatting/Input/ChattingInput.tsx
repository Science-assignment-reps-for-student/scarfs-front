import React, { FC, useCallback, useRef } from 'react';
import * as S from '../style';

interface Props {
  inputChange: (value: string) => void;
  value: string;
  sendMessage: (valie: string) => void;
  isConnected: boolean;
}

const ChattingInput: FC<Props> = ({ value, inputChange, sendMessage, isConnected }) => {
  const input = useRef<HTMLInputElement>();
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    inputChange(value);
  }, []);
  const resetInput = useCallback(() => {
    input.current.innerText = '';
    inputChange('');
  }, []);
  const buttonClickHandler = useCallback(() => {
    if (value.length <= 0) return;
    sendMessage(value);
    resetInput();
  }, [value]);
  const onKeyPressHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      if (value.length <= 0) return;
      sendMessage(value);
      resetInput();
    },
    [value],
  );
  return (
    <S.ChattingInputDiv>
      <S.ChattingInput>
        <input
          value={value}
          onChange={inputChangeHandler}
          onKeyPress={onKeyPressHandler}
          ref={input}
          readOnly={!isConnected}
          placeholder={
            isConnected ? '보낼 메세지를 입력해 주세요.' : '연결이 완료될 때 까지 기다려 주세요.'
          }
        />
        <S.ChattingSendButton onClick={buttonClickHandler} />
      </S.ChattingInput>
    </S.ChattingInputDiv>
  );
};

export default ChattingInput;
