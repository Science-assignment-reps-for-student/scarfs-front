import React, { FC, ReactElement, useEffect, useState } from 'react';
import * as S from '../style';
import { PersonalSubject } from '../../../../modules/reducer/Admin/adminPersonal';

interface Props {
  subject: PersonalSubject;
}

const PersonalClassInfo: FC<Props> = ({ subject }): ReactElement => {
  const { class_submit } = subject;
  const personalLen = class_submit.length;
  const [personalSubmitLen, setPersonalSubmitLen] = useState(0);

  useEffect(() => {
    class_submit.forEach(a => a.submit === 1 && setPersonalSubmitLen(personalSubmitLen + 1));
  }, [subject]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedMembers>
            제출인원{' '}
            <span>
              {personalSubmitLen}/{personalLen}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={personalLen} value={personalSubmitLen}></S.AdminProgress>
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
    </S.SubjectClsContentInfo>
  );
};

export default PersonalClassInfo;
