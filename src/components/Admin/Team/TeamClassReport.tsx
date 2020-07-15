import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ClassListCommon from '../ClassListCommon';
import ClassListHeadCommon from '../ClassListHeadCommon';

interface Props {}

const TeamClassReport: FC<Props> = (): ReactElement => {
  return (
    <S.SubjectClsContentReport>
      <S.SubjectClsContentCommonTitle>팀보고서</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isReport={true} />
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <ClassListCommon
              studentId={'1210'}
              key={i}
              name={'TestName'}
              submit={0}
              i={i}
              isReport={true}
            />
          ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentReport>
  );
};

export default TeamClassReport;
