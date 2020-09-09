import React, { FC, ReactElement } from 'react';

import * as S from '../style';
import ClassListHeadCommon from '../ListCommonHead';
import SubmitList from '../SubmitList';
import { ExperimentSubject } from '../../../../modules/reducer/Admin/adminExperiment';

interface Props {
  subject: ExperimentSubject;
}

const ExperimentClassSubmit: FC<Props> = ({ subject }): ReactElement => {
  return (
    <S.SubjectClsContentMembers>
      <S.SubjectClsContentCommonTitle>동료평가</S.SubjectClsContentCommonTitle>
      <S.SubjectClsContentCommonList>
        <ClassListHeadCommon isPersonal={true} />
        {subject.peer_evaluation_submit.map(({ name, student_number, submit, student_id }) => (
          <SubmitList
            key={student_id}
            name={name}
            submit={submit}
            studentNumber={student_number}
            studentId={student_id}
            typing={subject.typing}
            assignmentId={subject.id}
          />
        ))}
      </S.SubjectClsContentCommonList>
    </S.SubjectClsContentMembers>
  );
};

export default ExperimentClassSubmit;
