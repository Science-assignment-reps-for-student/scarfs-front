import React, { FC } from 'react';
import * as S from '../Default/PostFooter/style';
import { useHistory, useParams } from 'react-router-dom';
import { stateChange } from '../../../../lib/function';
import { ModalType, setModal } from '../../../../modules/reducer/Modal';

interface Props {
  isMine: boolean;
}

const PostButtons: FC<Props> = ({ isMine }) => {
  const paramId = Number(useParams<{ id: string }>().id);
  const history = useHistory();
  const openModal = stateChange<ModalType>(setModal);
  const openCommentModal = () => openModal('CommentModal');
  return (
    <S.PostFooterWrapper>
      {isMine && (
        <S.Button
          bgColor='#505BFF'
          fontColor='#FFFFFF'
          onClick={() => history.push(`/board/class/write?id=${paramId}`)}
        >
          수정하기
        </S.Button>
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
