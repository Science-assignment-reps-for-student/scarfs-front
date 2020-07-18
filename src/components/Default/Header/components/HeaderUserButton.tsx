import React, { FC } from 'react';
import * as S from '../style';

interface Props {
  children: string;
  onClick: (payload: string) => void;
  value: string;
}

const HeaderUserButton: FC<Props> = ({ children, onClick, value }) => {
  return (
    <S.HeaderUserButton onClick={() => onClick(value)}>
      <div />
      <p>{children}</p>
    </S.HeaderUserButton>
  );
};

export default HeaderUserButton;
