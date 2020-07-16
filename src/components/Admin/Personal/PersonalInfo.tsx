import React, { FC, ReactElement, useEffect, useState } from 'react';
import * as S from '../style';
import adminDownload from '../../../assets/Admin/adminDownload.svg';
import adminEdit from '../../../assets/Admin/adminEdit.svg';
import { PersonalSubject } from 'src/modules/reducer/Admin/adminPersonal';

interface Props {
  cls: PersonalSubject;
}

const PersonalClassInfo: FC<Props> = ({ cls }): ReactElement => {
  const all = cls.class_submit.length;
  const [o, setO] = useState(0);

  useEffect(() => {
    cls.class_submit.forEach(a => a.submit === 1 && setO(o + 1));
  }, [cls]);

  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          <S.InfoSubmittedMembers>
            제출인원{' '}
            <span>
              {o}/{all}
            </span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max={all} value={o}></S.AdminProgress>
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
      <S.SubjectButtonWrap>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminEdit} alt='edit' title='edit' />
          수정
        </S.SubjectButton>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminDownload} alt='download' title='download' />
          다운로드
        </S.SubjectButton>
      </S.SubjectButtonWrap>
    </S.SubjectClsContentInfo>
  );
};

export default PersonalClassInfo;
