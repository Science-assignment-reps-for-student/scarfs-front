import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import PersonalClassInfo from './PersonalInfo';
import PersonalClassSubmit from './PersonalSubmit';
import { PersonalSubject } from 'src/modules/reducer/Admin/adminPersonal';
import WithClass from '../WithClass';

interface Props {
  cls: PersonalSubject;
  classNum: number;
}

const PersonalClass: FC<Props> = ({ cls, classNum }): ReactElement => {
  const { created_at, deadline, description, class_submit } = cls;

  const getFullTime = (time: number) => {
    const c = new Date(time);
    return `${c.getFullYear()}.${c.getMonth() + 1}.${c.getDate()}`;
  };

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
          <PersonalClassInfo cls={cls} />
          <div />
          <PersonalClassSubmit members={class_submit} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default WithClass(PersonalClass);
