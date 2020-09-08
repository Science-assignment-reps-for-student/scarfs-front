import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ClassListHeadCommon from '../ListCommonHead';
import SubmitList from '../SubmitList';
import { PeerEvaluationCommon } from '../../../../modules/reducer/Admin';

interface Props {
  members: PeerEvaluationCommon[];
}

const ExperimentClassSubmit: FC<Props> = ({ members }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      <S.SubjectClsContentCommonTitle>동료평가</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {members.map(({ name, student_number, submit, student_id }) => (
          <SubmitList
            key={student_id}
            name={name}
            submit={submit}
            student_number={student_number}
            student_id={student_id}
          />
        ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentMembers>
  );
};

export default ExperimentClassSubmit;
