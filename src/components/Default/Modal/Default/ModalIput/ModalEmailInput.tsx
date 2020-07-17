import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { isEmpty } from '../../../../../lib/function';

interface Props {
  text: string;
  onClick: () => void;
  onChange: (payload: string) => void;
  value: string;
  isError: boolean;
  placeholder?: string;
}

const ModalEmailInput: FC<Props> = ({ text, onClick, onChange, value, isError, placeholder }) => {
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  }, []);
  const isEmailAble = (email: string) => {
    if (email.length > 0) {
      return true;
    }
    return false;
  };
  return (
    <S.ModalInputWrapper>
      <div>
        <S.ModalText>{text}</S.ModalText>
        <S.ModalTextIcon isEmpty={isEmpty(value)} />
      </div>
      <S.ModalEmailInputWrapper isError={isError} isAble={isEmailAble(value)}>
        <S.ModalCodeInput
          onChange={inputChangeHandler}
          value={value}
          isEmpty={isEmpty(value)}
          placeholder={placeholder}
        />
        <div onClick={onClick}>인증</div>
      </S.ModalEmailInputWrapper>
    </S.ModalInputWrapper>
  );
};

export default ModalEmailInput;
