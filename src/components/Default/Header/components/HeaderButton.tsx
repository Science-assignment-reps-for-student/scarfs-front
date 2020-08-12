import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as S from '../style';
import { createAlert } from '../../../../modules/reducer/Alert';

interface Props {
  children: string;
  link: string;
  isLogin: boolean;
}

const HeaderButton: FC<Props> = ({ children, link, isLogin }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const buttonClickHandler = () => {
    if (isLogin) {
      history.push(link);
      return;
    }
    dispatch(createAlert('로그인 해주세요.'));
  };
  return (
    <S.HeaderButton onClick={buttonClickHandler}>
      <div />
      <p>{children}</p>
    </S.HeaderButton>
  );
};

export default HeaderButton;
