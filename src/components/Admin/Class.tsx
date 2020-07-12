import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ClassInfo from './ClassInfo';
import ClassListReport from './ClassListReport';
import ClassListMembers from './ClassListMembers';

interface Props {
  subject: string;
  onlyPersonal: boolean;
  i: number;
}

const Class: FC<Props> = ({ subject, onlyPersonal, i }): ReactElement => {
  return (
    <S.SubjectCls>
      <S.SubjectClsTitle>{i + 1}반</S.SubjectClsTitle>
      <S.SubjectClsContentWrap>
        <S.SubjectClsContentHead>
          <S.SubjectClsContentHeadTitle>{subject}</S.SubjectClsContentHeadTitle>
          <S.SubjectClsContentHeadTime>2020.10.23 - 2020.11.01</S.SubjectClsContentHeadTime>
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
