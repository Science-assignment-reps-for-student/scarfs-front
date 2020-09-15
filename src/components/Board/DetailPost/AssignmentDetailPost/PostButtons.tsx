import React, { FC, useEffect } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory } from 'react-router-dom';
import { setModal } from '../../../../modules/reducer/Modal';
import { stateChange, useTeam, useDeleteTeam, useToken } from '../../../../lib/function';
import { sendRefreshToken } from '../../../../modules/reducer/Header';

interface Props {
  type?: 'PERSONAL' | 'TEAM' | 'EXPERIMENT';
}

const PostButtons: FC<Props> = ({ type }) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const history = useHistory();
  const assignmentId = parseInt(location.pathname.split('/')[3]);
  const [team, getTeamError, getTeam] = useTeam();
  const [deleteTeamSuccess, deleteTeamError, deleteTeam, resetDeleteTeamState] = useDeleteTeam();
  const goNoticeList = () => history.push('/board/assignment-guide');
  const openModal = stateChange(setModal);
  const openFileSubmitModal = () => openModal('FileSubmit');
  const openPeerEvaluationModal = () => openModal('PeerEvaluation');
  const openAddTeamMemberModal = () => openModal('AddTeamMember');
  const openCreateTeamModal = () => openModal('CreateTeamModal');

  const onClickDeleteTeam = () => {
    if (confirm('정말로 팀을 삭제하시겠습니까?')) {
      deleteTeam(team.team_id);
    }
  };

  useEffect(() => {
    return () => {
      resetDeleteTeamState();
    };
  }, []);

  useEffect(() => {
    if (deleteTeamSuccess) {
      getTeam(assignmentId);
      resetDeleteTeamState();
    }
  }, [deleteTeamSuccess]);

  useEffect(() => {
    if (deleteTeamError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => onClickDeleteTeam(),
        page: 'AssignmentDetailPost/deleteTeamMember',
      };
      refreshTokenChange(params);
    } else if (deleteTeamError.status) {
      alert(`Error code: ${deleteTeamError.status} 팀 삭제 실패!`);
      resetDeleteTeamState();
    }
  }, [deleteTeamError]);

  return (
    <S.PostFooterWrapper>
      {(type === 'TEAM' || type === 'EXPERIMENT') && (
        <S.ButtonBox>
          {!team.team_id && getTeamError.message === 'Team Not Found' ? (
            <S.Button
              borderColor='#505BFF'
              bgColor='#ffffff'
              fontColor='#505BFF'
              onClick={openCreateTeamModal}
            >
              팀 생성
            </S.Button>
          ) : (
            <S.Button
              borderColor='#ff5700'
              bgColor='#ff5700'
              fontColor='#ffffff'
              onClick={onClickDeleteTeam}
            >
              팀 삭제
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
        {((type === 'TEAM' && team.leader) || type === 'EXPERIMENT' || type === 'PERSONAL') && (
          <S.Button bgColor='#505BFF' fontColor='#FFFFFF' onClick={openFileSubmitModal}>
            제출하기
          </S.Button>
        )}
        <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={goNoticeList}>
          목록으로
        </S.Button>
      </S.ButtonBox>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
