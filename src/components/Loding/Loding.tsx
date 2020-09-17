import React, { FC } from 'react';
import * as S from './style';

const Loding: FC = () => {
  return (
    <div className='galaxy'>
      <S.LodingBackground>
        <S.Sun />
        <S.MoonOrbit>
          <S.Moon />
        </S.MoonOrbit>
        <S.EearthOrbit>
          <S.Earth />
        </S.EearthOrbit>
      </S.LodingBackground>
    </div>
  );
};

export default Loding;
