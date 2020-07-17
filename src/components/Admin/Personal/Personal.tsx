import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import PersonalClassInfo from './PersonalInfo';
import PersonalClassSubmit from './PersonalSubmit';
import { PersonalSubject } from 'src/modules/reducer/Admin/adminPersonal';
import WithClass from '../WithClass';
import { getFullTime } from '../../../lib/function/admin';

interface Props {
  subject: PersonalSubject;
  classNum: number;
}

const PersonalClass: FC<Props> = ({ subject, classNum }): ReactElement => {
  const { created_at, deadline, description, class_submit } = subject;

  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{classNum}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{description}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>
            {getFullTime(created_at)} - {getFullTime(deadline)}
          </S.SubjectClsContentHeadTime>
        </S.SubjectClsContentHead>
        <S.SubjectClsContent>
          <PersonalClassInfo subject={subject} />
          <div />
          <PersonalClassSubmit members={class_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(PersonalClass);
