import React, { FC, useState } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';
import { AlertModal } from '../../../../';
import { AlertState, createAlert } from '../../../../../modules/reducer/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../../../lib/function';

const comments = [
  {
    commentId: 1,
    content:
      '맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ맞습니다 ㅎㅎ',
    writerName: '이대성',
    writerNumber: '2309',
    cocomments: [
      {
        cocommentId: 1,
        content: 'ㅇㅈ!!',
        writerName: '임용성',
        writerNumber: '2309',
      },
      {
        cocommentId: 2,
        content: 'ㄹㅇ',
        writerName: '손민기',
        writerNumber: '2309',
      },
      {
        cocommentId: 3,
        content: '아빠!!',
        writerName: '강신희',
        writerNumber: '2309',
      },
    ],
  },
  {
    commentId: 2,
    content: 'ㅋㅋㅋㅋ',
    writerName: '이우찬',
    writerNumber: '2116',
    cocomments: [
      {
        cocommentId: 1,
        content: 'ㅎㅎ 바보~',
        writerName: '오준상',
        writerNumber: '2309',
      },
      {
        cocommentId: 2,
        content: '여기 핫플이네',
        writerName: '김어진',
        writerNumber: '2309',
      },
      {
        cocommentId: 3,
        content: '나한테 왜그래ㅠ',
        writerName: '이성진',
        writerNumber: '2309',
      },
    ],
  },
];

interface Comment {
  commentId: number;
  content: string;
  writerNumber: string;
  writerName: string;
  cocomments: ReComment[];
}

interface ReComment {
  cocommentId: number;
  content: string;
  writerNumber: string;
  writerName: string;
}

interface CommonCommentProps {
  comment: Comment | ReComment;
  children?: React.ReactNode;
}

const CommonComment: FC<CommonCommentProps> = ({
  comment: { content, writerNumber, writerName },
  children,
}) => {
  const [text, setText] = useState(content);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  const { returnValue } = useSelector(getStateCallback<AlertState>('Alert'));
  const onClickDelete = () => {
    dispatch(createAlert('댓글을 정말 삭제하시겠습니까?'));
  };
  const onClickEdit = () => setIsEditMode(true);
  const onClickCancel = () => setIsEditMode(false);
  const onChangeInput = e => setText(e.target.value);
  return (
    <>
      <S.Header>
        <div>
          <S.WriterText>{writerNumber}</S.WriterText>
          <S.WriterText>{writerName}</S.WriterText>
          <S.GrayText>{new Date().toLocaleDateString()}</S.GrayText>
          <S.GrayText>13:57</S.GrayText>
        </div>
        <div>
          <S.GrayText onClick={onClickEdit}>수정</S.GrayText>
          <S.GrayText>|</S.GrayText>
          <S.GrayText onClick={onClickDelete}>삭제</S.GrayText>
        </div>
      </S.Header>
      <S.Main>
        {isEditMode ? (
          <S.CommentEditBox>
            <S.ReCommentInput widthFull value={text} onChange={onChangeInput} />
            <div>
              <S.Button blue>수정</S.Button>
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
      <CommonComment comment={comment} />
    </S.ReCommentBox>
  );
};

interface CommentItempProps {
  comment: Comment & {
    cocomments: Array<ReComment>;
  };
}

const CommentItem: FC<CommentItempProps> = ({ comment }) => {
  const [isOpenRecomment, setIsOpenRecomment] = useState(false);
  const { cocomments } = comment;
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  return (
    <S.CommentItemBox>
      <CommonComment comment={comment}>
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
          <ReCommentItem key={comment.cocommentId} comment={comment} />
        ))}
      </CommonComment>
    </S.CommentItemBox>
  );
};

const CommentModal: FC = () => {
  return (
    <AlertModal type='notify'>
      <Modal>
        <S.CommentModalBox>
          <S.CommentInputBox>
            <S.Title>댓글달기</S.Title>
            <S.Textarea placeholder='주제와 맞지 않는 댓글이나 저작권 등, 다른 사람의 권리를 침해하는 댓글은 자제해 주세요.' />
            <S.Button>확인</S.Button>
          </S.CommentInputBox>
          <S.CommentListBox>
            <S.Title>전체 댓글</S.Title>
            <S.CommentListBox>
              {comments.map(comment => (
                <CommentItem key={comment.commentId} comment={comment} />
              ))}
            </S.CommentListBox>
          </S.CommentListBox>
        </S.CommentModalBox>
      </Modal>
    </AlertModal>
  );
};

export default CommentModal;
