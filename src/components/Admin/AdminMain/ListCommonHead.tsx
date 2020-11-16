import React, { FC, ReactElement } from 'react';

import * as S from './style';

interface Props {
  isReport: boolean;
  isTeam?: boolean;
}

const ListCommonHead: FC<Props> = ({ isReport, isTeam }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isReport && <S.SubjectClsContentCommonItemText>팀이름</S.SubjectClsContentCommonItemText>}
      <S.SubjectClsContentCommonItemText>학번</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>이름</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {isTeam ? '평가 여부' : '제출여부'}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ListCommonHead;
