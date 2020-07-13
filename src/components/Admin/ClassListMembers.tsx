import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ClassListCommon from './ClassListCommon';
import ClassListHeadCommon from './ClassListHeadCommon';

interface Props {
  onlyPersonal: boolean;
}

const ClassListMembers: FC<Props> = ({ onlyPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      {onlyPersonal && <S.SubjectClsContentCommonTitle>동료평가</S.SubjectClsContentCommonTitle>}
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isReport={false} />
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <ClassListCommon key={i} i={i} isReport={false} />
          ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentMembers>
  );
};

export default ClassListMembers;
