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
        {members.map(({ name, student_number, submit }) => (
          <SubmitList key={student_number} name={name} submit={submit} studentId={student_number} />
        ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentMembers>
  );
};

export default PersonalClassSubmit;
