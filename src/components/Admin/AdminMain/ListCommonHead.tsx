import React, { FC, ReactElement } from 'react';
import * as S from './style';

interface Props {
  isPersonal: boolean;
}

const ListCommonHead: FC<Props> = ({ isPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isPersonal && <S.SubjectClsContentCommonItemText>팀이름</S.SubjectClsContentCommonItemText>}
      <S.SubjectClsContentCommonItemText>학번</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>이름</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>제출여부</S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ListCommonHead;
