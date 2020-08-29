import React, { FC, useRef } from 'react';
import * as S from '../style';

interface Props {
  isMine: boolean;
  text: string;
  deleteButtonClickHandler: (id: number) => void;
  id: number;
  isDelete: boolean;
}

const ChattingBodyContent: FC<Props> = ({
  isMine,
  text,
  deleteButtonClickHandler,
  id,
  isDelete,
}) => {
  const trashRef = useRef<HTMLDivElement>();
  const logMouseOverHandler = () => {
    trashRef.current.style.display = 'block';
  };
  const logMouseLeaveHandler = () => {
    trashRef.current.style.display = 'none';
  };
  const childNode = <div className='text'>{isDelete ? '삭제된 메세지 입니다.' : text}</div>;
  return (
    <>
      {isMine ? (
        <S.MyChattingLog>
          <div onMouseEnter={logMouseOverHandler} onMouseLeave={logMouseLeaveHandler}>
            <div className='img' ref={trashRef} onClick={() => deleteButtonClickHandler(id)} />
            {childNode}
          </div>
        </S.MyChattingLog>
      ) : (
        <S.YourChattingLog>
          <div>{childNode}</div>
        </S.YourChattingLog>
      )}
    </>
  );
};

export default ChattingBodyContent;
