import React, { FC, useEffect } from 'react';
import * as S from '../Default/PostMain/style';
import { AssignmentDetailPostWithFiles } from '../Default/PostMain';
import { getLocaleDateString } from '../../utils';
import { getAssignmentFile, FileResponse } from '../../../../lib/api/AssignmentDetailPost';
import { downloadBlobByClick } from '../../../../lib/function/admin';
import { ErrorType } from '../../../../lib/type';
import { useTeam } from '../../../../lib/function';

interface Props {
  board: AssignmentDetailPostWithFiles;
}

const PostInfoDetail: FC<Props> = ({ board }) => {
  const [team] = useTeam();
  const downloadFileHandler = async (file: FileResponse) => {
    try {
      const { data } = await getAssignmentFile(file.file_id);
      const blob: Blob = new Blob([data], { type: 'application/json' });
      downloadBlobByClick(blob, `${file.file_name}`);
    } catch (e) {
      if (e.response?.data) {
        const error: ErrorType = e.response.data;
        if (error.status) {
          alert(`Error Code: ${e.response.status} 다운로드 실패`);
        }
      }
      alert('Error!');
    }
  };

  if (typeof board === 'undefined') return null;
  return (
    <>
      <S.InfoDetail>
        <S.InfoTitle>제출상태</S.InfoTitle>
        <S.BlueText>{board.complete ? 'O' : 'X'}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>등록일</S.InfoTitle>
        <S.BlueText>{getLocaleDateString(board.created_at)}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>마감일</S.InfoTitle>
        <S.BlueText>{getLocaleDateString(board.dead_line)}</S.BlueText>
      </S.InfoDetail>
      <S.InfoDetail>
        <S.InfoTitle>조회수</S.InfoTitle>
        <S.BlueText>{board.view}</S.BlueText>
      </S.InfoDetail>
      {!!board.files.length && (
        <S.InfoDetail>
          <S.InfoTitle>첨부파일</S.InfoTitle>
          <S.FileBox>
            {board.files.map(file => (
              <S.File key={file.file_id} onClick={() => downloadFileHandler(file)}>
                {file.file_name}
              </S.File>
            ))}
          </S.FileBox>
        </S.InfoDetail>
      )}
      {team.team_name && (
        <S.InfoDetail>
          <S.InfoTitle>팀</S.InfoTitle>
          <S.TeamBox>
            <S.TeamNameBox>
              <S.LeaderText>
                <span>[</span>
                {team.team_name}
                <span>]</span>
              </S.LeaderText>
            </S.TeamNameBox>
            <S.TeamMemberBox>
              <S.LeaderText>{team.leader_name}</S.LeaderText>
              {team.member_list.map(member => (
                <S.TeamText key={member.member_id}>{member.member_name}</S.TeamText>
              ))}
            </S.TeamMemberBox>
          </S.TeamBox>
        </S.InfoDetail>
      )}
    </>
  );
};

export default PostInfoDetail;
