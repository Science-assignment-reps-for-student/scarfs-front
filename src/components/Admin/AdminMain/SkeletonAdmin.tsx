import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const subjects = ['personal', 'team', 'experiment'];

const SkeletonAdmin: FC<Props> = () => {
  return (
    <>
      {subjects.map(subject => (
        <S.SSubject key={subject}>
          <S.SBone width='100%' height='48px' />
          <S.SClasses>
            <S.SBone className='back' width='49%' height='240px'></S.SBone>
            <S.SBone className='back' width='49%' height='240px'></S.SBone>
            <S.SBone className='back' width='49%' height='240px'></S.SBone>
            <S.SBone className='back' width='49%' height='240px'></S.SBone>
          </S.SClasses>
        </S.SSubject>
      ))}
    </>
  );
};

export default SkeletonAdmin;
