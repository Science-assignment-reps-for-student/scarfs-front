import React, { ChangeEvent, FC } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  hasPlaceholder?: boolean;
  setContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const WriteTextarea: FC<Props> = ({ hasPlaceholder, setContent }) => {
  return (
    <S.TextareaBox>
      <TextareaAutosize
        placeholder={hasPlaceholder && '내용을 입력하세요.'}
        onChange={setContent}
      />
    </S.TextareaBox>
  );
};

export default WriteTextarea;
