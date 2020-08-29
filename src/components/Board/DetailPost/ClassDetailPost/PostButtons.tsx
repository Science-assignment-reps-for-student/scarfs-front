import React, { FC, useEffect } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory, useParams } from 'react-router-dom';
import { stateChange, useUser } from '../../../../lib/function';
import { ModalType, setModal } from '../../../../modules/reducer/Modal';
import { createAlert, AlertModalTypes, AlertState } from '../../../../modules/reducer/Alert';
import { getStateCallback } from '../../../../lib/function';
import { useSelector, useDispatch } from 'react-redux';

const PostButtons: FC = () => {
  const paramId = Number(useParams<{ id: string }>().id);
  const history = useHistory();
  const dispatch = useDispatch();
  const openModal = stateChange<ModalType>(setModal);
  const { type } = useUser();
  const { returnValue } = useSelector(getStateCallback<AlertState>('Alert'));

  const openCommentModal = () => openModal('CommentModal');

  const onClickDelete = () => {
    dispatch(createAlert('게시글을 정말 삭제하시겠습니까?'));
  };

  useEffect(() => {
    if (returnValue) {
      console.log('삭제함 ㅅㄱ');
    } else {
      console.log('삭제안할게 ㅎㅎ');
    }
  }, [returnValue]);

  return (
    <S.PostFooterWrapper>
      {type === 'ADMIN' && (
        <div>
          <S.Button
            bgColor='#ffffff'
            fontColor='#000000'
            borderColor='#000000'
            borderPx='1'
            onClick={() => history.push(`/board/class/write?id=${paramId}`)}
          >
            수정하기
          </S.Button>
          <S.Button bgColor='#FF5700' fontColor='#FFFFFF' onClick={onClickDelete}>
            삭제하기
          </S.Button>
        </div>
      )}
      <S.Button bgColor='#505BFF' fontColor='#FFFFFF' onClick={openCommentModal}>
        댓글보기
      </S.Button>
      <S.Button bgColor='#000000' fontColor='#FFFFFF' onClick={() => history.push('/board/class')}>
        목록으로
      </S.Button>
    </S.PostFooterWrapper>
  );
};

export default PostButtons;
