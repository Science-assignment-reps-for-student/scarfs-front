import React, { FC } from 'react';
import * as S from '../../../style/Default/Header';

interface Props {
  children: string;
}

const HeaderButton: FC<Props> = ({ children }) => {
  return (
    <S.HeaderButton>
      <div />
      <p>{children}</p>
    </S.HeaderButton>
  );
};

export default HeaderButton;
