import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const SkeletonAside: FC<Props> = () => {
  return (
    <S.SSubject style={{ marginTop: '50px' }}>
      {Array(7)
        .fill(0)
        .map((_, i) => (
          <S.SBone key={i} width='40px' height='20px' style={{ margin: '0 24px' }} />
        ))}
    </S.SSubject>
  );
};

export default SkeletonAside;
