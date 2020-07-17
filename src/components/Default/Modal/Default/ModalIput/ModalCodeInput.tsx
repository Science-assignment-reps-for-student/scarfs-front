import React, { FC, useCallback } from 'react';
import * as S from '../../style';
import { isEmpty } from '../../../../../lib/function';

interface Props {
  text: string;
  isSuccess: boolean;
  onClick: () => void;
  onChange: (value: string) => void;
  value: string;
  isError: boolean;
  placeholder?: string;
}

const ModalCodeInput: FC<Props> = ({
  text,
  isSuccess,
  onClick,
  onChange,
  value,
  isError,
  placeholder,
}) => {
  const inputChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  }, []);
  return (
    <S.ModalInputWrapper>
      <div>
        <S.ModalText>{text}</S.ModalText>
        <S.ModalTextIcon isEmpty={!isEmpty(value)} />
      </div>
      <S.ModalCodeInputWrapper isError={isError} isSuccess={isSuccess}>
        <S.ModalCodeInput
          onChange={inputChangeHandler}
          value={value}
          isEmpty={!isEmpty(value)}
          readOnly={isSuccess ? true : false}
          placeholder={placeholder}
        />
        {isSuccess ? (
          <div>
            <div className='success' />
          </div>
        ) : (
          <div onClick={onClick}>인증</div>
        )}
      </S.ModalCodeInputWrapper>
    </S.ModalInputWrapper>
  );
};

export default ModalCodeInput;
