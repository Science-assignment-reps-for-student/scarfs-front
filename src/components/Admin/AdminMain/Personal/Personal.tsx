import React, { FC, ReactElement } from 'react';

import PersonalClassInfo from './PersonalInfo';
import PersonalClassSubmit from './PersonalSubmit';

import * as S from '../style';
import WithClass from '../WithClass';
import { PersonalSubject } from '../../../../modules/reducer/Admin/adminPersonal';
import { getDeadline } from '../../../../lib/function/admin';

interface Props {
  subject: PersonalSubject;
  classNum: number;
}

const PersonalClass: FC<Props> = ({ subject, classNum }): ReactElement => {
  const { created_at, deadline, description } = subject;

  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{classNum}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{description}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>
            {getDeadline(created_at, deadline)}
          </S.SubjectClsContentHeadTime>
        </S.SubjectClsContentHead>
        <S.SubjectClsContent>
          <PersonalClassInfo subject={subject} />
          <div />
          <PersonalClassSubmit subject={subject} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(PersonalClass);
