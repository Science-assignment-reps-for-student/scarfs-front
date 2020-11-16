import React, { FC, ReactElement, ChangeEvent, MouseEvent, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';
import Deadline from './Deadline';

import { attachment, trash } from '../../../assets/Admin';
import { ReducerType } from '../../../modules/store';
import { setFile, deleteFile } from '../../../modules/reducer/AdminCreate';
import { createAlert } from '../../../modules/reducer/Alert';

interface Props {}

const classes = ['class1', 'class2', 'class3', 'class4'];

const FilterForm: FC<Props> = (): ReactElement => {
  const { files } = useSelector((state: ReducerType) => state.AdminCreate);
  const dispatch = useDispatch();
  const fileExtends: string = '.hwp.jpg.png.jpeg.pptx.word.pdf.zip';

  const isAbleFileExt = (name: string) => {
    const splitName = name.split('.');
    return fileExtends.split('.').find(ext => ext === splitName[splitName.length - 1]);
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    const isAble = Array.from(files).some(file => isAbleFileExt(file.name));
    if (!isAble) {
      dispatch(createAlert('가능하지 않은 확장자입니다.'));
      return;
    }
    Array.from(files).forEach(file => {
      dispatch(setFile(file));
    });
  };

  const onClickDeleteFile = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const filteredFiles: File[] = files.filter(f => f.name !== e.currentTarget.dataset.name);
    dispatch(deleteFile());
    filteredFiles.forEach(file => {
      dispatch(setFile(file));
    });
  };

  const filterClasses = useMemo(() => {
    return classes.map(_class => (
      <S.FiltersClassesItem key={_class}>
        <span>{_class[_class.length - 1]}</span>
        <span>반</span>
        <Deadline key={_class} _class={_class} />
      </S.FiltersClassesItem>
    ));
  }, [classes]);

  return (
    <S.Filters>
      <S.FromTitle>반 정보</S.FromTitle>
      <S.FiltersClasses>{filterClasses}</S.FiltersClasses>
      <div>
        <input type='file' id='attachment' onChange={onChangeFile} multiple={true} hidden={true} />
        <S.FiltersAttachment htmlFor='attachment'>
          {files.length === 0 ? (
            <>
              <img src={attachment} alt='attachment' title='attachment' />
              <span>첨부파일</span>
            </>
          ) : (
            <S.FiltersAttachmentFiles>
              {files.map(({ name }: File, i) => (
                <S.FiltersAttachmentFilesItem key={i}>
                  <S.OverflowEllipsis>{name}</S.OverflowEllipsis>
                  <img
                    src={trash}
                    alt='trash'
                    title='trash'
                    data-name={name}
                    onClick={onClickDeleteFile}
                  />
                </S.FiltersAttachmentFilesItem>
              ))}
            </S.FiltersAttachmentFiles>
          )}
        </S.FiltersAttachment>
      </div>
    </S.Filters>
  );
};

export default FilterForm;
