import React, { FC, ReactElement } from 'react';
import * as S from '../style';
import ClassListHeadCommon from '../ClassListHeadCommon';
import SubmitList from '../SubmitList';
import { PrEvalCommon } from 'src/modules/reducer/Admin/admin';

interface Props {
  members: PrEvalCommon[];
}

const PersonalClassSubmit: FC<Props> = ({ members }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isReport={false} />
        {members.map(({ name, student_number, submit }) => (
          <SubmitList key={student_number} name={name} submit={submit} studentId={student_number} />
        ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentMembers>
  );
};

export default PersonalClassSubmit;
