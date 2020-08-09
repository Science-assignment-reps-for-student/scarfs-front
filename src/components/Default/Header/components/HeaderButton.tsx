import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../style';
import { getStateCallback } from '../../../../lib/function';
import { HeaderState } from '../../../../modules/reducer/Header';

interface Props {
  children: string;
  link: string;
  isLogin: boolean;
}

const HeaderButton: FC<Props> = ({ children, link, isLogin }) => {
  const history = useHistory();
  const buttonClickHandler = () => {
    if (isLogin) {
      history.push(link);
    }
  };
  return (
    <S.HeaderButton onClick={buttonClickHandler}>
      <div />
      <p>{children}</p>
    </S.HeaderButton>
  );
};

export default HeaderButton;
