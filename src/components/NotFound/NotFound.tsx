import React, { FC, useCallback } from 'react';
import * as S from './style';
import { Switch, useHistory } from 'react-router-dom';

const NotFound: FC = () => {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.goBack();
  }, []);
  const goHome = () => {
    history.push('/');
  };
  return (
    <S.NotFoundWrapper>
      <S.Main>
        <S.Title>404</S.Title>
        <S.Explain>요청하신 페이지를 찾을 수 없습니다.</S.Explain>
        <S.GoBackButton onClick={onClick}>◀ 이전 페이지로 이동</S.GoBackButton>
      </S.Main>
      <S.Logo onClick={goHome} />
    </S.NotFoundWrapper>
  );
};

export default NotFound;
