import React, { FC } from 'react';
import * as S from '../../../style/Default/Header';

interface Props {
  children: string;
}

const HeaderUserButton: FC<Props> = ({ children }) => {
  return (
    <S.HeaderUserButton>
      <div />
      <p>{children}</p>
    </S.HeaderUserButton>
  );
};

export default HeaderUserButton;
