import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ClassInfo from './ClassInfo';
import ClassListReport from './ClassListReport';
import ClassListMembers from './ClassListMembers';
import { CombineAdminSubject } from 'src/modules/reducer/Admin/admin';

interface Props {
  cls: CombineAdminSubject;
  classNum: number;
}

const Class: FC<Props> = ({ cls, classNum }): ReactElement => {
  const { created_at, deadline, description } = cls;
  const onlyPersonal = !cls.title.match('개인');

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
          <ClassInfo onlyPersonal={onlyPersonal} />
          <ClassListReport onlyPersonal={onlyPersonal} />
          <ClassListMembers onlyPersonal={onlyPersonal} />
        </S.SubjectClsContent>
      </S.SubjectClsContentWrap>
    </S.SubjectCls>
  );
};

export default Class;
