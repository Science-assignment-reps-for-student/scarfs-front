import React, { FC, ReactElement } from 'react';
import * as S from './style';
import ClassListCommon from './ClassListCommon';
import ClassListHeadCommon from './ClassListHeadCommon';

interface Props {
  onlyPersonal: boolean;
}

const ClassListReport: FC<Props> = ({ onlyPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentReport>
      {onlyPersonal && (
        <>
          <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
          <S.SubjectClsContentCommonList>
            <ClassListHeadCommon isReport={true} />
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <ClassListCommon key={i} i={i} isReport={true} />
              ))}
          </S.SubjectClsContentCommonList>
        </>
      )}
    </S.SubjectClsContentReport>
  );
};

export default ClassListReport;
