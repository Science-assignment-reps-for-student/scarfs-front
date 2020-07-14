import React, { FC, ReactElement } from 'react';
import * as S from './style';
import Class from './Class';

interface Props {
  subject: string;
  onlyPersonal: boolean;
}

const Subject: FC<Props> = ({ subject, onlyPersonal }): ReactElement => {
  const classList: number[] = [1, 2, 3, 4];
  return (
    <S.SubjectWrap>
      <S.SubjectTitle>{subject}</S.SubjectTitle>
      <S.Subject>
        {classList.map(classNum => {
          return (
            <Class
              key={classNum}
              classNum={classNum}
              subject={subject}
              onlyPersonal={onlyPersonal}
            />
          );
        })}
      </S.Subject>
    </S.SubjectWrap>
  );
};

export default Subject;
