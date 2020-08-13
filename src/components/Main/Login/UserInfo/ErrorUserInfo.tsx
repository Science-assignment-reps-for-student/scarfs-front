import React, { FC } from 'react';
import * as S from '../../style';

const ErrorUserInfo: FC = () => {
  return (
    <>
      <S.SkeletonUserInfo />
      <S.SkeletonUserInfoButton />
    </>
  );
};

export default ErrorUserInfo;
