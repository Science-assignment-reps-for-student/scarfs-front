import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ClassListHeadCommon from '../ListCommonHead';
import SubmitList from '../SubmitList';
import { PeerEvaluationCommon } from '../../../../modules/reducer/Admin';

interface Props {
  members: PeerEvaluationCommon[];
}

const PersonalClassSubmit: FC<Props> = ({ members }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={false} />
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

export default PersonalClassSubmit;
