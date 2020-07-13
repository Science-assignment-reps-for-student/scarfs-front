import React, { FC } from 'react';
import * as S from '../../../../style/Main';

const Logo: FC = () => {
  return (
    <S.Logo>
      <S.LogoImg />
      <S.LogoText>DAEDEOK SOFTWARE MEISTER HIGH SCHOOL</S.LogoText>
      <S.LogoTitleWrapper>
        <S.LogoSubTitle>대덕소프트웨어마이스터고등학교</S.LogoSubTitle>
        <S.LogoTitle>
          2020 과학
          <span className="point">과제 제출</span>
          시스템
        </S.LogoTitle>
      </S.LogoTitleWrapper>
    </S.Logo>
  );
};

export default Logo;
