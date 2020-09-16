import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const subjects = ['personal', 'team', 'experiment'];

const SkeletonAdmin: FC<Props> = () => {
  return (
    <>
      {subjects.map(subject => (
        <S.SSubject key={subject}>
          <S.SBone width='100%' height='48px' margin='50px 0 0 0' />
          <S.SClasses>
            <S.SBone width='49%' height='240px' />
            <S.SBone width='49%' height='240px' />
            <S.SBone width='49%' height='240px' />
            <S.SBone width='49%' height='240px' />
          </S.SClasses>
        </S.SSubject>
      ))}
    </>
  );
};

export default SkeletonAdmin;
