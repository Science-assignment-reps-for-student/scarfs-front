import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../style';
import { getStateCallback } from '../../../../lib/function';
import { HeaderState } from '../../../../modules/reducer/Header';

interface Props {
  children: string;
  link: string;
}

const HeaderButton: FC<Props> = ({ children, link }) => {
  const history = useHistory();
  const { accessToken } = useSelector(getStateCallback<HeaderState>('Header'));
  const buttonClickHandler = () => {
    if (accessToken.length > 0) {
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
