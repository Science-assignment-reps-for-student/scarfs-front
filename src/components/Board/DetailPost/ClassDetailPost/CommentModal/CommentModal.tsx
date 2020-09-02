import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import { Modal } from '../../Modal';
import { AlertModal } from '../../../../';
import { ErrorType } from '../../../../../lib/type';
import { getLocaleDateString } from '../../../utils';
import {
  useAddReCommentRedux,
  useUpdateReCommentRedux,
  useDeleteReCommentRedux,
} from '../../../../../containers/Board/DetailPost/ClassDetailPost/CommentModal';

export interface CommonComment {
  content: string;
  mine: boolean;
  student_number: string;
  writer_name: string;
  created_at: string;
  type: 'ADMIN' | 'STUDENT';
}

export interface Comment extends CommonComment {
  comment_id: number;
  cocomments: ReComment[];
}

export interface ReComment extends CommonComment {
  cocomment_id: number;
}

interface CommonCommentProps {
  comment: Comment | ReComment;
  isComment: boolean;
  updateComment?: (commentId: number, content: string) => void;
  updateCommentSuccess?: number;
  deleteComment?: (commentId: number) => void;
  resetCommentState?: () => void;
  children?: React.ReactNode;
}

const CommonComment: FC<CommonCommentProps> = ({
  comment,
  comment: { content, writer_name, mine, student_number, created_at, type },
  isComment,
  updateComment,
  updateCommentSuccess,
  deleteComment,
  resetCommentState,
  children,
}) => {
  const { comment_id } = comment as Comment;
  const { cocomment_id } = comment as ReComment;
  const [text, setText] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateReCommentSuccess, , updateReComment] = useUpdateReCommentRedux();
  const [, , deleteReComment] = useDeleteReCommentRedux();

  const createdHourAndMinute = useMemo(() => {
    const date = new Date(created_at);
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${hour}:${minute}`;
  }, [created_at]);

  const onClickEdit = () => setIsEditMode(true);

  const onClickCancel = () => setIsEditMode(false);

  const onChangeInput = e => setText(e.target.value);

  const updateSuccessHandler = useCallback(() => {
    setIsEditMode(false);
    resetCommentState();
  }, []);

  const updateCommentClickHandler = useCallback(() => {
    if (!text) {
      alert('빈 댓글은 입력할 수 없습니다.');
    } else {
      updateComment(comment_id, text);
    }
  }, [text]);

  const deleteCommentClickHandler = () => {
    if (confirm('댓글을 정말로 삭제하시겠습니까?')) {
      deleteComment(comment_id);
    }
  };

  const updateReCommentClickHandler = useCallback(() => {
    if (!text) {
      alert('빈 답글은 입력할 수 없습니다.');
    } else {
      updateReComment(cocomment_id, text);
    }
  }, [text]);

  const deleteReCommentClickHandler = () => {
    if (confirm('댓글을 정말로 삭제하시겠습니까?')) {
      deleteReComment(cocomment_id);
    }
  };

  useEffect(() => {
    if (!isEditMode && content !== text) {
      setText(content);
    }
  }, [isEditMode]);

  useEffect(() => {
    if (content !== text) {
      setText(content);
    }
  }, [content]);

  useEffect(() => {
    if (isComment && updateCommentSuccess === comment_id) {
      updateSuccessHandler();
    }
  }, [updateCommentSuccess, updateReCommentSuccess]);

  useEffect(() => {
    if (!isComment && updateReCommentSuccess === cocomment_id) {
      updateSuccessHandler();
    }
  }, [updateReCommentSuccess]);

  return (
    <>
      <S.Header>
        <div>
          {type === 'ADMIN' ? (
            <S.AdminText>관리자</S.AdminText>
          ) : (
            <>
              <S.WriterText>{student_number}</S.WriterText>
              <S.WriterText>{writer_name}</S.WriterText>
            </>
          )}
          <S.GrayText>{getLocaleDateString(created_at)}</S.GrayText>
          <S.GrayText>{createdHourAndMinute}</S.GrayText>
        </div>
        {mine && (
          <div>
            <S.GrayText onClick={onClickEdit}>수정</S.GrayText>
            <S.GrayText>|</S.GrayText>
            {isComment ? (
              <S.GrayText onClick={deleteCommentClickHandler}>삭제</S.GrayText>
            ) : (
              <S.GrayText onClick={deleteReCommentClickHandler}>삭제</S.GrayText>
            )}
          </div>
        )}
      </S.Header>
      <S.Main>
        {isEditMode ? (
          <S.CommentEditBox>
            <S.ReCommentInput widthFull value={text} onChange={onChangeInput} />
            <div>
              {isComment ? (
                <S.Button blue onClick={updateCommentClickHandler}>
                  수정
                </S.Button>
              ) : (
                <S.Button blue onClick={updateReCommentClickHandler}>
                  수정
                </S.Button>
              )}
              <S.Button onClick={onClickCancel}>취소</S.Button>
            </div>
          </S.CommentEditBox>
        ) : (
          <S.Content>{content}</S.Content>
        )}
        {children}
      </S.Main>
    </>
  );
};

interface ReCommentItemProps {
  comment: ReComment;
  resetCommentState: () => void;
}

const ReCommentItem: FC<ReCommentItemProps> = ({ comment, resetCommentState }) => {
  return (
    <S.ReCommentBox>
      <S.ReCommentPointer />
      <CommonComment comment={comment} isComment={false} resetCommentState={resetCommentState} />
    </S.ReCommentBox>
  );
};

interface CommentItempProps {
  comment: Comment & {
    cocomments: Array<ReComment>;
  };
  updateComment: (commentId: number, content: string) => void;
  updateCommentSuccess: number;
  deleteComment: (commentId: number) => void;
  resetCommentState: () => void;
}

const CommentItem: FC<CommentItempProps> = ({
  comment,
  updateComment,
  updateCommentSuccess,
  deleteComment,
  resetCommentState,
}) => {
  const { cocomments } = comment;
  const [text, setText] = useState('');
  const [isOpenRecomment, setIsOpenRecomment] = useState(false);
  const [addReCommentSuccess, , addReComment] = useAddReCommentRedux();

  const onChange = e => setText(e.target.value);
  const addReCommentClickHandler = useCallback(() => {
    if (!text) {
      alert('대댓글은 빌 수 없습니다.');
    } else {
      addReComment(comment.comment_id, text);
    }
  }, [text]);

  useEffect(() => {
    if (addReCommentSuccess === comment.comment_id) {
      setText('');
      setIsOpenRecomment(false);
      resetCommentState();
    }
  }, [addReCommentSuccess]);

  useEffect(() => {
    if (!isOpenRecomment && text) {
      setText('');
    }
  }, [isOpenRecomment]);

  return (
    <S.CommentItemBox>
      <CommonComment
        comment={comment}
        isComment={true}
        updateComment={updateComment}
        updateCommentSuccess={updateCommentSuccess}
        deleteComment={deleteComment}
        resetCommentState={resetCommentState}
      >
        <S.ReCommentButton onClick={() => setIsOpenRecomment(prev => !prev)}>
          {isOpenRecomment ? '닫기' : '답글쓰기'}
        </S.ReCommentButton>
        {isOpenRecomment && (
          <S.ReCommentInputBox>
            <S.ReCommentInput placeholder='답글을 입력하세요' value={text} onChange={onChange} />
            <S.Button onClick={addReCommentClickHandler}>답글 작성</S.Button>
          </S.ReCommentInputBox>
        )}
        {cocomments.map(comment => (
          <ReCommentItem
            key={`reco_${comment.cocomment_id}`}
            comment={comment}
            resetCommentState={resetCommentState}
          />
        ))}
      </CommonComment>
    </S.CommentItemBox>
  );
};

interface Props {
  comments: Comment[];
  getDetailPost: (boardId: number) => void;
  addComment: (boardId: number, content: string) => void;
  addCommentSuccess: boolean;
  addCommentError: ErrorType;
  updateComment: (commentId: number, content: string) => void;
  updateCommentSuccess: number;
  updateCommentError: ErrorType;
  deleteComment: (commentId: number) => void;
  deleteCommentSuccess: boolean;
  deleteCommentError: ErrorType;
  resetCommentState: () => void;
}

const CommentModal: FC<Props> = ({
  comments,
  getDetailPost,
  addComment,
  addCommentSuccess,
  addCommentError,
  updateComment,
  updateCommentSuccess,
  updateCommentError,
  deleteComment,
  deleteCommentSuccess,
  deleteCommentError,
  resetCommentState,
}) => {
  const BOARD_ID_INDEX = 3;
  const boardId = parseInt(useLocation().pathname.split('/')[BOARD_ID_INDEX]);
  const [comment, setComment] = useState<string>('');
  const [addReCommentSuccess, addReCommentError] = useAddReCommentRedux();
  const [updateReCommentSuccess, updateReCommentError] = useUpdateReCommentRedux();
  const [deleteReCommentSuccess, deleteReCommentError] = useDeleteReCommentRedux();

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  const onClick = useCallback(() => {
    if (!comment) {
      alert('빈 댓글은 입력할 수 없습니다.');
    }
    addComment(boardId, comment);
  }, [comment, addComment]);

  useEffect(() => {
    if (
      addCommentSuccess ||
      updateCommentSuccess ||
      deleteCommentSuccess ||
      addReCommentSuccess ||
      updateReCommentSuccess ||
      deleteReCommentSuccess
    ) {
      getDetailPost(boardId);
    }
    if (addCommentSuccess || deleteCommentSuccess || deleteReCommentSuccess) {
      resetCommentState();
    }
    if (addCommentSuccess) {
      setComment('');
    }
  }, [
    addCommentSuccess,
    updateCommentSuccess,
    deleteCommentSuccess,
    addReCommentSuccess,
    updateReCommentSuccess,
    deleteReCommentSuccess,
  ]);

  useEffect(() => {
    if (addCommentError.status) {
      alert(`Error code: ${addCommentError.status} 댓글 작성 실패`);
    } else if (addCommentError.message) {
      alert(addCommentError.message);
    }
  }, [addCommentError]);

  useEffect(() => {
    if (updateCommentError.status) {
      alert(`Error code: ${updateCommentError.status} 댓글 수정 실패`);
    } else if (updateCommentError.message) {
      alert(updateCommentError.message);
    }
  }, [updateCommentError]);

  useEffect(() => {
    if (deleteCommentError.status) {
      alert(`Error code: ${deleteCommentError.status} 댓글 삭제 실패`);
    } else if (deleteCommentError.message) {
      alert(deleteCommentError.message);
    }
  }, [deleteCommentError]);

  useEffect(() => {
    if (addReCommentError.status) {
      alert(`Error code: ${addReCommentError.status} 답글 작성 실패`);
    } else if (addReCommentError.message) {
      alert(addReCommentError.message);
    }
  }, [addReCommentError]);

  useEffect(() => {
    if (updateReCommentError.status) {
      alert(`Error code: ${updateReCommentError.status} 답글 수정 실패`);
    } else if (updateReCommentError.message) {
      alert(updateReCommentError.message);
    }
  }, [updateReCommentError]);

  useEffect(() => {
    if (deleteReCommentError.status) {
      alert(`Error code: ${deleteCommentError.status} 답글 삭제 실패`);
    } else if (deleteReCommentError.message) {
      alert(deleteCommentError.message);
    }
  }, [deleteReCommentError]);

  return (
    <AlertModal type='notify'>
      <Modal>
        <S.CommentModalBox>
          <S.CommentInputBox>
            <S.Title>댓글달기</S.Title>
            <S.Textarea
              placeholder='주제와 맞지 않는 댓글이나 저작권 등, 다른 사람의 권리를 침해하는 댓글은 자제해 주세요.'
              onChange={onChange}
              value={comment}
            />
            <S.Button onClick={onClick}>댓글 작성</S.Button>
          </S.CommentInputBox>
          <S.CommentListBox>
            <S.Title>전체 댓글</S.Title>
            <S.CommentListBox>
              {comments.map(comment => (
                <CommentItem
                  key={`co_${comment.comment_id}`}
                  comment={comment}
                  updateComment={updateComment}
                  updateCommentSuccess={updateCommentSuccess}
                  deleteComment={deleteComment}
                  resetCommentState={resetCommentState}
                />
              ))}
            </S.CommentListBox>
          </S.CommentListBox>
        </S.CommentModalBox>
      </Modal>
    </AlertModal>
  );
};

export default CommentModal;
