import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {
  isReport: boolean;
  assignmentType: string;
}

const ListCommonHead: FC<Props> = ({ isReport, assignmentType }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isReport && <S.SubjectClsContentCommonItemText>팀이름</S.SubjectClsContentCommonItemText>}
      <S.SubjectClsContentCommonItemText>학번</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>이름</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {assignmentType === '개인' ? '제출여부' : '평가여부'}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ListCommonHead;
