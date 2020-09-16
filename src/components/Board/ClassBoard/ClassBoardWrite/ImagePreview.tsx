import React, { FC, useCallback } from 'react';
import * as S from './style';

interface Props {
  index: number;
  imgSrc: string;
  setImgFiles: React.Dispatch<React.SetStateAction<any[]>>;
  setWriteContentComponents: React.Dispatch<React.SetStateAction<any[]>>;
}

const ImagePreview: FC<Props> = ({ index, imgSrc, setImgFiles, setWriteContentComponents }) => {
  const deleteImgHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setImgFiles(prev => {
      const imgs = [...prev];
      imgs[index] = undefined;
      return imgs;
    });
    setWriteContentComponents(prev => {
      const components = [...prev];
      components[index] = undefined;
      return components;
    });
  };
  return (
    <S.ImagePreviewBox>
      <img src={imgSrc} />
      <button onClick={deleteImgHandler}>삭제</button>
    </S.ImagePreviewBox>
  );
};

export default ImagePreview;
