import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import { Modal } from '../../Modal';
import { AlertModal } from '../../../../';
import { AlertState, createAlert } from '../../../../../modules/reducer/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorType } from '../../../../../lib/type';
import { getStateCallback } from '../../../../../lib/function';
import { getLocaleDateString } from '../../../utils';

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
  resetCommentState?: () => void;
  children?: React.ReactNode;
}

const CommonComment: FC<CommonCommentProps> = ({
  comment,
  comment: { content, writer_name, mine, student_number, created_at, type },
  isComment,
  updateComment,
  updateCommentSuccess,
  resetCommentState,
  children,
}) => {
  const { comment_id } = comment as Comment;
  const [text, setText] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const { returnValue } = useSelector(getStateCallback<AlertState>('Alert'));
  const createdHourAndMinute = useMemo(() => {
    const date = new Date(created_at);
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${hour}:${minute}`;
  }, [created_at]);

  const onClickDelete = () => {
    dispatch(createAlert('댓글을 정말 삭제하시겠습니까?'));
  };

  const onClickEdit = () => setIsEditMode(true);

  const onClickCancel = () => setIsEditMode(false);

  const onChangeInput = e => setText(e.target.value);

  const updateCommentClickHandler = useCallback(() => {
    if (!text) {
      alert('빈 댓글은 입력할 수 없습니다.');
    } else {
      updateComment(comment_id, text);
    }
  }, [text]);

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
      setIsEditMode(false);
      resetCommentState();
    }
  }, [updateCommentSuccess]);

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
            <S.GrayText onClick={onClickDelete}>삭제</S.GrayText>
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
                <S.Button blue onClick={() => alert('todo: updateReCommentClickHandler')}>
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
}

const ReCommentItem: FC<ReCommentItemProps> = ({ comment }) => {
  return (
    <S.ReCommentBox>
      <S.ReCommentPointer />
      <CommonComment comment={comment} isComment={false} />
    </S.ReCommentBox>
  );
};

interface CommentItempProps {
  comment: Comment & {
    cocomments: Array<ReComment>;
  };
  updateComment: (commentId: number, content: string) => void;
  updateCommentSuccess: number;
  resetCommentState: () => void;
}

const CommentItem: FC<CommentItempProps> = ({
  comment,
  updateComment,
  updateCommentSuccess,
  resetCommentState,
}) => {
  const [isOpenRecomment, setIsOpenRecomment] = useState(false);
  const { cocomments } = comment;
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);

  return (
    <S.CommentItemBox>
      <CommonComment
        comment={comment}
        isComment={true}
        updateComment={updateComment}
        updateCommentSuccess={updateCommentSuccess}
        resetCommentState={resetCommentState}
      >
        <S.ReCommentButton onClick={() => setIsOpenRecomment(prev => !prev)}>
          {isOpenRecomment ? '닫기' : '답글쓰기'}
        </S.ReCommentButton>
        {isOpenRecomment && (
          <S.ReCommentInputBox>
            <S.ReCommentInput placeholder='답글을 입력하세요' value={text} onChange={onChange} />
            <S.Button>확인</S.Button>
          </S.ReCommentInputBox>
        )}
        {cocomments.map(comment => (
          <ReCommentItem key={`reco_${comment.cocomment_id}`} comment={comment} />
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
  resetCommentState,
}) => {
  const BOARD_ID_INDEX = 3;
  const boardId = parseInt(useLocation().pathname.split('/')[BOARD_ID_INDEX]);
  const [comment, setComment] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);

  const onClick = useCallback(() => {
    if (!comment) {
      alert('빈 댓글은 입력할 수 없습니다.');
    }
    addComment(boardId, comment);
  }, [comment, addComment]);

  useEffect(() => {
    if (addCommentSuccess || updateCommentSuccess) {
      getDetailPost(boardId);
    }
    if (addCommentSuccess) {
      resetCommentState();
      setComment('');
    }
  }, [addCommentSuccess, updateCommentSuccess]);

  useEffect(() => {
    if (addCommentError.status) {
      alert(`Error code: ${addCommentError.status}`);
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
