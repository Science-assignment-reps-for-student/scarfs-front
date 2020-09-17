import React, { FC } from 'react';
import * as S from './style';

interface Props {}

const filters = ['1반', '2반', '3반', '4반', '개인', '팀', '과제'];

const SkeletonAside: FC<Props> = () => {
  return (
    <S.SSubject className='asideWrap'>
      {filters.map(filter => (
        <S.SBone className='asideItem' key={filter} width='40px' height='20px' />
      ))}
    </S.SSubject>
  );
};

export default SkeletonAside;
