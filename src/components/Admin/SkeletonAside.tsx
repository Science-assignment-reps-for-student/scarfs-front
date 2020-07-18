import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const filters = ['1반', '2반', '3반', '4반', '개인', '팀', '과제'];

const SkeletonAside: FC<Props> = () => {
  return (
    <S.SSubject style={{ marginTop: '50px' }}>
      {filters.map(filter => (
        <S.SBone key={filter} width='40px' height='20px' style={{ margin: '0 24px' }} />
      ))}
    </S.SSubject>
  );
};

export default SkeletonAside;
