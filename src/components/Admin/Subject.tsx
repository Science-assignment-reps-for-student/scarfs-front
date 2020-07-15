import React, { FC, ReactElement } from 'react';
import * as S from './style';
import Class from './Class';

interface Props {
  subject: string;
}

const Subject: FC<Props> = ({ subject, children }): ReactElement => {
  const classes: number[] = [1, 2, 3, 4];
  return (
    <S.SubjectWrap>
      <S.SubjectTitle>{subject}</S.SubjectTitle>
      <S.Subject>
        {/* {classes.map(classNum => {
          return (
            <Class
              key={classNum}
              classNum={classNum}
              subject={subject}
              onlyPersonal={onlyPersonal}
            />
          );
        })} */}
        {children}
      </S.Subject>
    </S.SubjectWrap>
  );
};

export default Subject;
