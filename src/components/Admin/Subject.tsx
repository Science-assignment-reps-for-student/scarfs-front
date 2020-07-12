import React, { FC, ReactElement } from 'react';
import * as S from './style';
import Class from './Class';

interface Props {
  subject: string;
  onlyPersonal: boolean;
}

const Subject: FC<Props> = ({ subject, onlyPersonal }): ReactElement => {
  return (
    <S.SubjectWrap>
      <S.SubjectTitle>{subject}</S.SubjectTitle>
      <S.Subject>
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return <Class key={i} i={i} subject={subject} onlyPersonal={onlyPersonal} />;
          })}
      </S.Subject>
    </S.SubjectWrap>
  );
};

export default Subject;
