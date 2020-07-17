import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { isTextEmpty } from '../../../../../lib/function';

interface Props {
  text: string;
  value: string;
  valueChange: (text: string) => void;
  placeholder?: string;
}

const ModalHalfInput: FC<Props> = ({ text, value, valueChange, placeholder }) => {
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    valueChange(value);
  }, []);
  return (
    <div>
      <div>
        <S.ModalText>{text}</S.ModalText>
        <S.ModalTextIcon isEmpty={isTextEmpty(value)} />
      </div>
      <S.ModalHalfInput
        onChange={inputChangeHandler}
        value={value}
        isEmpty={isTextEmpty(value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ModalHalfInput;
