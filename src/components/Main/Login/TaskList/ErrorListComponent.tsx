import React, { FC } from 'react';
import * as S from '../../style';

const ErrorListComponent: FC = () => {
  return (
    <>
      <S.SkeletonTaskListComponent />
      <S.SkeletonTaskListComponent />
      <S.SkeletonTaskListComponent />
      <S.SkeletonTaskListComponent />
    </>
  );
};

export default ErrorListComponent;
