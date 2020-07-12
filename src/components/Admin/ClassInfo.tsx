import React, { FC, ReactElement } from 'react';
import * as S from './style';
import adminDownload from '../../assets/Admin/adminDownload.svg';
import adminEdit from '../../assets/Admin/adminEdit.svg';

interface Props {
  onlyPersonal: boolean;
}

const ClassInfo: FC<Props> = ({ onlyPersonal }): ReactElement => {
  return (
    <S.SubjectClsContentInfo>
      <S.InfoSubmitted>
        <S.InfoSubmittedCommon>
          {onlyPersonal && <S.InfoSubmittedTitle>팀 보고서</S.InfoSubmittedTitle>}
          <S.InfoSubmittedMembers>
            제출인원 <span>4/7</span>
          </S.InfoSubmittedMembers>
          <S.AdminProgress max="7" value="7" className="all"></S.AdminProgress>
        </S.InfoSubmittedCommon>
        <S.InfoSubmittedCommon>
          {onlyPersonal && (
            <>
              {onlyPersonal && <S.InfoSubmittedTitle>동료평가</S.InfoSubmittedTitle>}
              <S.InfoSubmittedMembers>
                제출인원 <span>06/20</span>
              </S.InfoSubmittedMembers>
              <S.AdminProgress max="20" value="6"></S.AdminProgress>
            </>
          )}
        </S.InfoSubmittedCommon>
      </S.InfoSubmitted>
      <S.SubjectButtonWrap>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminEdit} alt="edit" title="edit" />
          수정
        </S.SubjectButton>
        <S.SubjectButton>
          <S.SubjectButtonImg src={adminDownload} alt="download" title="download" />
          다운로드
        </S.SubjectButton>
      </S.SubjectButtonWrap>
    </S.SubjectClsContentInfo>
  );
};

export default ClassInfo;
