import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {}

const HeaderAccountButton: FC<Props> = (): ReactElement => {
  return <S.HeaderAccountButtonWrap>로그인</S.HeaderAccountButtonWrap>;
};

export default HeaderAccountButton;
