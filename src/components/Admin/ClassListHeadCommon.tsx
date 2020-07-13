import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  isReport: boolean;
}

const ClassListReport: FC<Props> = ({ isReport }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isReport && <S.SubjectClsContentCommonItemText>팀이름</S.SubjectClsContentCommonItemText>}
      <S.SubjectClsContentCommonItemText>학번</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>이름</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>제출여부</S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ClassListReport;
