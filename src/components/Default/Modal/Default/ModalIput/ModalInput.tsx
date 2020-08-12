import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { isTextEmpty } from '../../../../../lib/function';

interface Props {
  text: string;
  value: string;
  valueChange: (text: string) => void;
  type?: string;
  placeholder?: string;
}

const ModalInput: FC<Props> = ({ text, value, valueChange, type, placeholder }) => {
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    valueChange(value);
  }, []);
  return (
    <S.ModalInputWrapper>
      <div>
        <S.ModalText>{text}</S.ModalText>
        <S.ModalTextIcon isEmpty={isTextEmpty(value)} />
      </div>
      <S.ModalInput
        onChange={inputChangeHandler}
        isEmpty={isTextEmpty(value)}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </S.ModalInputWrapper>
  );
};

export default ModalInput;
