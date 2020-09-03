import React, { FC, MutableRefObject, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from '../style';
import ChattingBodyContent from './ChattingBodyContent';
import DeleteAlert from './DeleteAlert';
import { ChattingContentType } from '../../../lib/api/Chatting/Chatting';
import { deleteChattingThunk } from '../../../modules/thunk/Chatting';

interface Props {
  chattingList: ChattingContentType[];
  chattingBodyRef: MutableRefObject<HTMLDivElement>;
  isDeleteChange: (payload: boolean) => void;
  isDelete: boolean;
}

const ChattingBody: FC<Props> = ({ chattingList, chattingBodyRef, isDelete, isDeleteChange }) => {
  const dispatch = useDispatch();
  const [deleteId, deleteIdChange] = useState<number>(-1);
  const setChattingList = useCallback((chattingList: ChattingContentType[]) => {
    const buffer = chattingList.map(chatting => {
      const { message, id, deleted } = chatting;
      return (
        <ChattingBodyContent
          key={id}
          id={id}
          text={message}
          isDelete={deleted}
          isMine={chatting.type === 'STUDENT' ? true : false}
          deleteButtonClickHandler={deleteButtonClickHandler}
        />
      );
    });
    return buffer;
  }, []);
  const deleteButtonClickHandler = useCallback((id: number) => {
    isDeleteChange(true);
    deleteIdChange(id);
  }, []);
  const approveButtonClickHandler = useCallback(() => {
    dispatch(deleteChattingThunk(deleteId));
    isDeleteChange(false);
  }, [deleteId]);
  const cancelButtonClickHandler = useCallback(() => {
    isDeleteChange(false);
  }, []);
  return (
    <S.ChattingBody ref={chattingBodyRef}>
      {isDelete ? (
        <DeleteAlert
          approveCallback={approveButtonClickHandler}
          cancelCallback={cancelButtonClickHandler}
          text='정말로 삭제 하시겠습니까?'
        />
      ) : (
        <></>
      )}
      <div className='body'>{setChattingList(chattingList)}</div>
    </S.ChattingBody>
  );
};

export default ChattingBody;
