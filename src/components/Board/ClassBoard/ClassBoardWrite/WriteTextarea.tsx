import React, { FC } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  index: number;
  refValue: ((instance: HTMLTextAreaElement) => void) | React.RefObject<HTMLTextAreaElement>;
  hasPlaceholder?: boolean;
  setContents: React.Dispatch<React.SetStateAction<any[]>>;
}

const WriteTextarea: FC<Props> = ({ index, refValue, hasPlaceholder, setContents }) => {
  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setContents(prev => {
      const contents = [...prev];
      contents[index] = content;
      return contents;
    });
  };
  return (
    <S.TextareaBox>
      <TextareaAutosize
        placeholder={hasPlaceholder && '내용을 입력하세요.'}
        onChange={contentChangeHandler}
        ref={refValue}
      />
    </S.TextareaBox>
  );
};

export default WriteTextarea;
