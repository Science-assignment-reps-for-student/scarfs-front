import React, { FC, useRef, useState, useEffect, useCallback, Fragment } from 'react';
import * as S from './style';
import queryString from 'query-string';
import {
  PostMainWrapper,
  LeftAside,
  PostContentBox,
} from '../../DetailPost/Default/PostMain/style';
import { WriteTextarea, WriteFooterButtons, ImagePreview } from './';
import { readFileAsDataURL, useToken, stateChange } from '../../../../lib/function';
import { ClassDetailPost } from '../../../../lib/api/ClassDetailPost';
import { getImageFileByURL } from '../../../../lib/api/ClassBoardWrite';
import { useHistory } from 'react-router-dom';
import { ErrorType } from '../../../../lib/type';
import { sendRefreshToken } from '../../../../modules/reducer/Header';

interface Props {
  writeBoard: (data: FormData) => void;
  writeBoardError: ErrorType;
  classNumber: number;
  classDetailPost: ClassDetailPost;
  updateBoard: (boardId: number, data: FormData) => void;
  updateBoardError: ErrorType;
}

const WriteMain: FC<Props> = ({
  writeBoard,
  writeBoardError,
  classNumber,
  classDetailPost,
  updateBoard,
  updateBoardError,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const history = useHistory();
  const { id } = queryString.parse(location.search);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [imgFiles, setImgFiles] = useState<Array<File>>([undefined]);
  const [title, setTitle] = useState(classDetailPost.title);
  const [contents, setContents] = useState<string[]>(['']);
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
    if (!title.trim()) {
      return alert('제목은 빌 수 없습니다.');
    }
    if (!contents.some(content => content.trim())) {
      return alert('내용은 빌 수 없습니다.');
    }
    if (contents.some(content => content.indexOf('%{') !== -1)) {
      return alert('포함할 수 없는 문자입니다.');
    }
    const data = new FormData();
    let content = '';
    let count = 0;
    let prevIndex = 0;
    data.append('title', title);
    writeContentComponents.forEach((component, index) => {
      if (!component) return;
      if (Number(component.key) % 2 === 0) {
        if (Number(writeContentComponents[prevIndex].key) % 2 === 0) {
          content += `${contents[index]}\n`;
        } else {
          content += `${contents[index]}`;
        }
      } else if (Number(component.key) % 2 === 1) {
        count++;
        content += `%{image${count}}`;
        data.append('images', imgFiles[index] as File);
      }
      prevIndex = index;
    });
    data.append('content', content);
    data.append('class_number', classNumber.toString());
    writeBoard(data);
  }, [title, contents, imgFiles, writeContentComponents, classNumber]);

  const updateClickHandler = useCallback(() => {
    if (!title) {
      return alert('제목은 빌 수 없습니다.');
    }
    if (!contents.some(content => content.trim())) {
      return alert('내용은 빌 수 없습니다.');
    }
    if (contents.some(content => content.indexOf('%{') !== -1)) {
      return alert('포함할 수 없는 문자입니다.');
    }
    const data = new FormData();
    let content = '';
    let count = 0;
    data.append('title', title);
    let prevIndex = 0;
    writeContentComponents.forEach((component, index) => {
      if (!component) return;
      if (Number(component.key) % 2 === 0) {
        if (Number(writeContentComponents[prevIndex].key) % 2 === 0) {
          content += `${contents[index]}\n`;
        } else {
          content += `${contents[index]}`;
        }
      } else if (Number(component.key) % 2 === 1) {
        count++;
        content += `%{image${count}}`;
        data.append('images', imgFiles[index]);
      }
      prevIndex = index;
    });
    data.append('content', content);
    updateBoard(Number(id), data);
  }, [title, contents, imgFiles, writeContentComponents, id]);

  useEffect(() => {
    inputTitleRef.current.focus();
  }, []);

  useEffect(() => {
    textareaRef.current.focus();
  }, [writeContentComponents]);

  useEffect(() => {
    const { title, content, images } = classDetailPost;
    if (title) {
      let nextImageStartIndex = 0;
      let prevImageEndIndex = 0;
      const components = [];
      const contents = [];
      const files: File[] = [];
      let imageIndex = 0;
      let index = components.length;

      const setOriginalBoard = async () => {
        await (async () => {
          while (content.indexOf('%{', prevImageEndIndex) !== -1) {
            index = components.length;
            nextImageStartIndex = content.indexOf('%{', prevImageEndIndex);
            files[index] = undefined;
            components.push(
              <WriteTextarea
                key={index}
                value={content.slice(prevImageEndIndex, nextImageStartIndex)}
                index={index}
                refValue={textareaRef}
                setContents={setContents}
              />,
            );
            contents.push(content.slice(prevImageEndIndex, nextImageStartIndex));

            index = components.length;

            components.push(
              <ImagePreview
                key={index}
                index={index}
                imgSrc={`${process.env.BASE_URL}/shank/image/${images[imageIndex]}`}
                setImgFiles={setImgFiles}
                setWriteContentComponents={setWriteContentComponents}
              />,
            );
            contents.push('');

            await getImageFileByURL(images[imageIndex])
              .then(({ data }) => {
                files[index] = data;
              })
              .catch(error => {
                if (error.response?.status === 403) {
                  const params = {
                    serverType: {
                      refreshToken,
                    },
                    callback: () => {
                      getImageFileByURL(images[imageIndex]).then(({ data }) => {
                        files[index] = data;
                      });
                    },
                    page: 'ClassBoardWrite/getImageFileByURL',
                  };
                  refreshTokenChange(params);
                } else {
                  console.log(error);
                  alert('사진을 불러오지 못했습니다.');
                  history.push('/error');
                }
              });

            prevImageEndIndex = content.indexOf('}', nextImageStartIndex) + 1;
            imageIndex++;
          }
        })();

        index = components.length;

        contents.push(content.slice(prevImageEndIndex));
        components.push(
          <WriteTextarea
            key={index}
            value={content.slice(prevImageEndIndex)}
            index={index}
            refValue={textareaRef}
            setContents={setContents}
          />,
        );
        setTitle(title);
        setContents(contents);
        setImgFiles(files);
        setWriteContentComponents(components);
      };
      setOriginalBoard();
    }
  }, [classDetailPost]);

  useEffect(() => {
    if (writeBoardError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => writeClickHandler(),
        page: 'ClassBoardWrite/writeBoard',
      };
      refreshTokenChange(params);
    } else if (writeBoardError.message) {
      alert(writeBoardError.message);
    }
  }, [writeBoardError]);

  useEffect(() => {
    if (updateBoardError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => updateClickHandler(),
        page: 'ClassBoardWrite/updateBoard',
      };
      refreshTokenChange(params);
    } else if (updateBoardError.status) {
      alert(`Error code: ${updateBoardError.status} 게시글 수정 실패`);
    }
  }, [updateBoardError]);

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
      <WriteFooterButtons
        isEditMode={id ? true : false}
        writeOrEditClickHandler={id ? updateClickHandler : writeClickHandler}
        boardId={Number(id)}
      />
    </>
  );
};

export default WriteMain;
