import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory } from 'react-router-dom';
import { setModal } from '../../../../modules/reducer/Modal';
import { stateChange } from '../../../../lib/function';

interface Props {
  type?: string;
}

const PostButtons: FC<Props> = ({ type }) => {
  const history = useHistory();
  const goNoticeList = () => history.push('../assignment-guide');
  const openModal = stateChange(setModal);
  const openFileSubmitModal = () => openModal('FileSubmit');
  const openPeerEvaluationModal = () => openModal('PeerEvaluation');
  const openAddTeamMemberModal = () => openModal('AddTeamMember');
  return (
    <S.PostFooterWrapper>
      {type === '팀' && (
        <S.ButtonBox>
          <S.Button
            borderColor='#505BFF'
            bgColor='#ffffff'
            fontColor='#505BFF'
            onClick={openAddTeamMemberModal}
          >
            팀원추가
          </S.Button>
          <S.Button
            borderColor='#505BFF'
            bgColor='#ffffff'
            fontColor='#505BFF'
            onClick={openPeerEvaluationModal}
          >
            상호평가
          </S.Button>
        </S.ButtonBox>
      )}
      <S.ButtonBox>
        <S.Button bgColor='#505BFF' fontColor='#FFFFFF' onClick={openFileSubmitModal}>
          제출하기
        </S.Button>
        <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={goNoticeList}>
          목록으로
        </S.Button>
      </S.ButtonBox>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
