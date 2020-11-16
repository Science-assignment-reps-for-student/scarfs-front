import React, { FC, useEffect, useMemo } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { PostHeader, PostMain, PostFooter } from '../Default';
import { PostInfoDetail, PostButtons } from './';
import { AssignmentDetailPost, FileResponse, Team } from '../../../../lib/api/AssignmentDetailPost';
import { ErrorType, ErrorResponseType } from '../../../../lib/type';
import { useUser, useToken, stateChange } from '../../../../lib/function';
import { SBone } from '../../../Admin/AdminMain/style';
import { sendRefreshToken } from '../../../../modules/reducer/Header';

interface Props {
  isLoading: boolean;
  detailPost: AssignmentDetailPost;
  getDetailPostError: ErrorType;
  getDetailPost: (id: number) => void;
  files: FileResponse[];
  getAssignmentFilesError: ErrorResponseType;
  getFiles: (id: number) => void;
  getTeam: (assignmentId: number) => void;
  getTeamError: ErrorType;
  resetDetailPost: () => void;
}

const AssignmentDetailPost: FC<Props> = ({
  isLoading,
  detailPost,
  getDetailPostError,
  getDetailPost,
  files,
  getFiles,
  getAssignmentFilesError,
  getTeam,
  getTeamError,
  resetDetailPost,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const history = useHistory();
  const paramId = Number(useParams<{ id: string }>().id);
  const { classNumber, type, isLoading: isGetUserLoading } = useUser();

  const board = useMemo(
    () => ({
      ...detailPost,
      files,
    }),
    [detailPost, files],
  );

  useEffect(() => {
    getDetailPost(paramId);
  }, [paramId]);

  useEffect(() => {
    if (getDetailPostError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getDetailPost(paramId),
        page: 'AssignmentDetailPost/getDetailPost',
      };
      refreshTokenChange(params);
    } else if (getDetailPostError.status) {
      alert(`Error code: ${getDetailPostError.status} 과제 불러오기 실패!`);
      history.push('/board/assignment-guide');
    }
  }, [getDetailPostError]);

  useEffect(() => {
    if (type !== 'ADMIN' && !isGetUserLoading) {
      getTeam(paramId);
    }

    // return () => {
    // resetDetailPost();
    // };
  }, [isGetUserLoading]);

  useEffect(() => {
    if (detailPost.title) {
      getFiles(paramId);
    }
  }, [detailPost]);

  useEffect(() => {
    if (getAssignmentFilesError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getFiles(paramId),
        page: 'AssignmentDetailPost/getFiles',
      };
      refreshTokenChange(params);
    } else if (getAssignmentFilesError.status) {
      alert(`Error code: ${getDetailPostError.status} 첨부파일 불러오기 실패!`);
    }
  }, [getAssignmentFilesError]);

  useEffect(() => {
    if (getTeamError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getTeam(paramId),
        page: 'AddTeamMemberModal/getTeam',
      };
      refreshTokenChange(params);
    }
    if (getTeamError.status && getTeamError.message !== 'Team Not Found') {
      alert(`Error code: ${getTeamError.status} 팀 불러오기 실패!`);
    }
  }, [getTeamError]);

  if (isNaN(paramId) || paramId < 0) return <Redirect to='/error' />;
  return (
    <>
      {isLoading ? (
        <SBone width='1280px' height='45px' />
      ) : (
        <PostHeader
          title={`${
            type === 'STUDENT'
              ? `${classNumber}반 과제안내`
              : '관리자는 옳바른 반의 과제가 정확하게 나오지 않을 수 있습니다.'
          } `}
          to='/board/assignment-guide'
        />
      )}
      {isLoading ? (
        <SBone width='1280px' height='550px' margin='31px 0 40px' />
      ) : (
        <PostMain
          title={board.title}
          type={board.type}
          prevPostNumber={board.pre_board_id}
          nextPostNumber={board.next_board_id}
          prevPostTitle={board.pre_board_title}
          nextPostTitle={board.next_board_title}
          content={board.description}
          board={board}
          InfoDetailTemplate={PostInfoDetail}
        />
      )}
      {isLoading ? (
        <SBone width='1280px' height='41px' />
      ) : (
        <PostFooter type={board.type} ButtonsTemplate={PostButtons} />
      )}
    </>
  );
};

export default AssignmentDetailPost;
