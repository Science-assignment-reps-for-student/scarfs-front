import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
}

const Subject: FC<Props> = ({ title, children }): ReactElement => {
  return (
    <S.SubjectWrap>
      <S.SubjectTitle>{title}</S.SubjectTitle>
      <S.Subject>{children}</S.Subject>
    </S.SubjectWrap>
  );
};

export default Subject;
