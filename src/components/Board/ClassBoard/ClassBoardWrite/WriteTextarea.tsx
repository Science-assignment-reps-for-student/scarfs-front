import React, { FC, useState } from 'react';
import * as S from './style';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  index: number;
  value?: string;
  refValue: ((instance: HTMLTextAreaElement) => void) | React.RefObject<HTMLTextAreaElement>;
  hasPlaceholder?: boolean;
  setContents: React.Dispatch<React.SetStateAction<any[]>>;
}

const WriteTextarea: FC<Props> = ({ index, value, refValue, hasPlaceholder, setContents }) => {
  const [content, setContent] = useState(value ? value : '');
  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;
    setContent(content);
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
        value={content}
        onChange={contentChangeHandler}
        ref={refValue}
      />
    </S.TextareaBox>
  );
};

export default WriteTextarea;
