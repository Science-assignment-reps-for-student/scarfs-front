import React, { FC, useRef, useState, ReactElement, useEffect, useMemo } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import * as S from './style';
import {
  PostMainWrapper,
  LeftAside,
  PostContentBox,
} from '../../DetailPost/Default/PostMain/style';
import { WriteTextarea, WriteFooterButtons, ImagePreview } from './';
import { readFileAsDataURL } from '../../../../lib/function';

interface Props {
  data?: {
    title: string;
    content: string;
  };
}

const WriteMain: FC<Props> = ({ data }) => {
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imgFiles, setImgFiles] = useState<Array<File>>([]);
  const [title, setTitle] = useState(data.title ? data.title : '');
  const [contents, setContents] = useState<Array<string>>([data.content ? data.content : '']);
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const [writeContentComponents, setWriteContentComponents] = useState<any[]>([
    <WriteTextarea
      key={0}
      index={0}
      refValue={textareaRef}
      hasPlaceholder={true}
      setContents={setContents}
      value={contents[0]}
    />,
  ]);
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const components = [...writeContentComponents];
    const imgs = [...imgFiles];
    for await (const file of Array.from(files)) {
      const result = await readFileAsDataURL(file);
      inputFileRef.current.value = '';
      let index = components.length;
      imgs[index] = file;
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
    }
    setImgFiles(imgs);
    setWriteContentComponents(components);
  };
  useEffect(() => {
    console.log(1);
    textareaRef.current.focus();
  }, [writeContentComponents]);
  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);
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
      <WriteFooterButtons isEditMode={data.title ? true : false} />
    </>
  );
};

export default WriteMain;
