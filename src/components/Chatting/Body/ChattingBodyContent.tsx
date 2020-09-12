import React, { FC, useRef, useState } from 'react';
import * as S from '../style';

interface Props {
  isMine: boolean;
  text: string;
  deleteButtonClickHandler: (id: number) => void;
  id: number;
  isDelete: boolean;
}

interface ChattingProps {
  text: string;
  deleteButtonClickHandler: (id: number) => void;
  id: number;
  isDelete: boolean;
  isHover: boolean;
  logMouseLeaveHandler: () => void;
  logMouseOverHandler: () => void;
  children: React.ReactNode;
}

const DELETE_MESSAGE = '삭제된 메세지 입니다.';

const ChattingBodyContent: FC<Props> = ({
  isMine,
  text,
  deleteButtonClickHandler,
  id,
  isDelete,
}) => {
  const [isHover, hoverChange] = useState<boolean>(false);
  const logMouseOverHandler = () => {
    hoverChange(true);
  };
  const logMouseLeaveHandler = () => {
    hoverChange(false);
  };
  const deletedMessageHandler = (message: string, isDelete: boolean) => {
    if (isDelete) return DELETE_MESSAGE;
    return message;
  };
  const checkChattingOwnerAndSetChattingLog = (props: ChattingProps) => {
    if (isMine) return <MyChattingLog {...props} />;
    return <YourChattingLog {...props} />;
  };
  const MyChattingLog = ({ isHover, deleteButtonClickHandler, id, children }: ChattingProps) => {
    return (
      <S.MyChattingLog isHover={isHover}>
        <div>
          <div className='img' onClick={() => deleteButtonClickHandler(id)} />
          {children}
        </div>
      </S.MyChattingLog>
    );
  };
  const YourChattingLog = ({ children }: ChattingProps) => {
    return (
      <S.YourChattingLog isHover={false}>
        <div>{children}</div>
      </S.YourChattingLog>
    );
  };
  const getText = (text: string, isDelete: boolean): React.ReactNode => (
    <div className='text'>{deletedMessageHandler(text, isDelete)}</div>
  );
  return checkChattingOwnerAndSetChattingLog({
    isHover,
    text,
    deleteButtonClickHandler,
    logMouseLeaveHandler,
    logMouseOverHandler,
    id,
    isDelete,
    children: getText(text, isDelete),
  });
};

export default ChattingBodyContent;
