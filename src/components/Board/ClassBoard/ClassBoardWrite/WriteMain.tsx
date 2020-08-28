import React, { FC, useRef, useState, ReactElement, useEffect, useMemo, useCallback } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import * as S from './style';
import {
  PostMainWrapper,
  LeftAside,
  PostContentBox,
} from '../../DetailPost/Default/PostMain/style';
import { WriteTextarea, WriteFooterButtons, ImagePreview } from './';
import { readFileAsDataURL } from '../../../../lib/function';
import { writeBoardSuccess } from 'src/modules/reducer/ClassBoardWrite';

interface Props {
  data?: {
    title: string;
    content: string;
  };
  writeBoard: (data: FormData) => void;
  classNumber: number;
}

const WriteMain: FC<Props> = ({ writeBoard, classNumber }) => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imgFiles, setImgFiles] = useState<Array<File>>([undefined]);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState<string[]>([]);
  const [writeContentComponents, setWriteContentComponents] = useState<React.ReactElement[]>([
    <WriteTextarea
      key={0}
      index={0}
      refValue={textareaRef}
      hasPlaceholder={true}
      setContents={setContents}
      value={contents[0]}
    />,
  ]);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const components = [...writeContentComponents];
    const imgs = [...imgFiles];
    const newContents = [...contents];
    for await (const file of Array.from(files)) {
      inputFileRef.current.value = '';
      const result = await readFileAsDataURL(file);
      let index = components.length;
      imgs[index] = file;
      newContents[index] = '';
      components.push(
        <ImagePreview
          key={index}
          index={index}
          imgSrc={result}
          setImgFiles={setImgFiles}
          setWriteContentComponents={setWriteContentComponents}
        />,
      );
      index = components.length;
      components.push(
        <WriteTextarea
          key={index}
          index={index}
          refValue={textareaRef}
          setContents={setContents}
        />,
      );
      newContents[index] = '';
      imgs[index] = undefined;
    }
    setImgFiles(imgs);
    setContents(newContents);
    setWriteContentComponents(components);
  };

  const writeClickHandler = useCallback(() => {
    if (!title) {
      return alert('제목은 빌 수 없습니다.');
    }
    if (!contents.some(content => content)) {
      return alert('내용은 빌 수 없습니다.');
    }
    const data = new FormData();
    let content = '';
    let count = 0;
    data.append('title', title);
    writeContentComponents.forEach((component, index) => {
      if (!component) return;
      if (Number(component.key) % 2 === 0) {
        content += `${contents[index]}\n`;
      } else if (Number(component.key) % 2 === 1) {
        count++;
        content += `%{image${count}}\n`;
        data.append('images', imgFiles[index]);
      }
    });
    data.append('content', content);
    data.append('class_number', classNumber.toString());
    writeBoard(data);
  }, [title, contents, imgFiles, writeContentComponents, classNumber]);

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  useEffect(() => {
    textareaRef.current.focus();
  }, [writeContentComponents]);

  return (
    <>
      <PostMainWrapper>
        <LeftAside>
          <S.Box>
            <S.TitleInput
              type='text'
              placeholder='제목을 입력하세요.'
              ref={inputTitleRef}
              value={title}
              onChange={titleChangeHandler}
            />
          </S.Box>
          <S.ImageUploadButton htmlFor='input-file'>사진 업로드</S.ImageUploadButton>
        </LeftAside>
        <PostContentBox>
          <S.ContentWrapper id='write' ref={contentRef}>
            {writeContentComponents}
          </S.ContentWrapper>
        </PostContentBox>
        <S.InvisibleInput
          type='file'
          accept='image/*'
          id='input-file'
          multiple={true}
          onChange={fileChangeHandler}
          ref={inputFileRef}
        />
      </PostMainWrapper>
      <WriteFooterButtons isEditMode={false} writeOrEditClickHandler={writeClickHandler} />
    </>
  );
};

export default WriteMain;
