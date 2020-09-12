import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory } from 'react-router-dom';
import { setModal } from '../../../../modules/reducer/Modal';
import { stateChange, useTeam } from '../../../../lib/function';

interface Props {
  type?: 'PERSONAL' | 'TEAM' | 'EXPERIMENT';
}

const PostButtons: FC<Props> = ({ type }) => {
  const history = useHistory();
  const [team, getTeamError, getTeam] = useTeam();
  const goNoticeList = () => history.push('/board/assignment-guide');
  const openModal = stateChange(setModal);
  const openFileSubmitModal = () => openModal('FileSubmit');
  const openPeerEvaluationModal = () => openModal('PeerEvaluation');
  const openAddTeamMemberModal = () => openModal('AddTeamMember');
  const openCreateTeamModal = () => openModal('CreateTeamModal');

  return (
    <S.PostFooterWrapper>
      {(type === 'TEAM' || type === 'EXPERIMENT') && (
        <S.ButtonBox>
          {!team.team_id && getTeamError.message === 'Team Not Found' && (
            <S.Button
              borderColor='#505BFF'
              bgColor='#ffffff'
              fontColor='#505BFF'
              onClick={openCreateTeamModal}
            >
              팀 생성
            </S.Button>
          )}
          {team.leader && (
            <>
              <S.Button
                borderColor='#505BFF'
                bgColor='#ffffff'
                fontColor='#505BFF'
                onClick={openAddTeamMemberModal}
              >
                팀원추가
              </S.Button>
            </>
          )}

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
        {(type === 'TEAM' && team.leader) ||
          type === 'EXPERIMENT' ||
          (type === 'PERSONAL' && (
            <S.Button bgColor='#505BFF' fontColor='#FFFFFF' onClick={openFileSubmitModal}>
              제출하기
            </S.Button>
          ))}
        <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={goNoticeList}>
          목록으로
        </S.Button>
      </S.ButtonBox>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
