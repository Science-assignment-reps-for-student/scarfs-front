import React, { FC, ReactElement } from 'react';
import * as S from './style';
import SubjectButtons from './SubjectButtons';
import { CombineAdminSubjects } from '../../../modules/reducer/Admin';

interface Props {
  subject: CombineAdminSubjects;
}

const Subject: FC<Props> = ({ subject, children }): ReactElement => {
  const { title, id, typing } = subject[0];

  return (
    <S.SubjectWrap>
      <S.SubjectTitle>{title}</S.SubjectTitle>
      <SubjectButtons assignmentId={id} typing={typing} />
      <S.Subject>{children}</S.Subject>
    </S.SubjectWrap>
  );
};

export default Subject;
