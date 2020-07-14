import React, { FC } from 'react';
import * as S from '../../style';

const LogoText: FC = () => {
  return (
    <S.LogOutedLogoTextWrapper>
      <S.LogoText>DAEDEOK SOFTWARE MEISTER HIGH SCHOOL</S.LogoText>
      <S.LogoTitleWrapper>
        <S.LogoSubTitle>대덕소프트웨어마이스터고등학교</S.LogoSubTitle>
        <S.LogOutedLogoTitle>
          2020 과학
          <span className="point">과제 제출</span>
          시스템
        </S.LogOutedLogoTitle>
      </S.LogoTitleWrapper>
      <S.LogOutedButtonWrapper>
        <S.LoginButton>로그인</S.LoginButton>
        <S.SignUpButton>회원가입</S.SignUpButton>
      </S.LogOutedButtonWrapper>
    </S.LogOutedLogoTextWrapper>
  );
};

export default LogoText;
