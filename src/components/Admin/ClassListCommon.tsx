import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminO from '../../assets/Admin/adminO.svg';
import adminX from '../../assets/Admin/adminX.svg';

interface Props {
  isReport: boolean;
  i: number;
}

const ClassListCommon: FC<Props> = ({ isReport, i }): ReactElement => {
  return (
    <S.SubjectClsContentCommonItem>
      {isReport && (
        <S.SubjectClsContentCommonItemText>
          {i % 4 === 0 && '팀이름'}
        </S.SubjectClsContentCommonItemText>
      )}
      <S.SubjectClsContentCommonItemText>120{i + 1}</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>이름</S.SubjectClsContentCommonItemText>
      <S.SubjectClsContentCommonItemText>
        {i % 4 === 0 && <img src={(i % 8 === 0 ? adminO : adminX)} alt="condition" title="condition" />}
      </S.SubjectClsContentCommonItemText>
    </S.SubjectClsContentCommonItem>
  );
};

export default ClassListCommon;
