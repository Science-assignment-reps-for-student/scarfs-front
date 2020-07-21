import React, { FC, ReactElement, ChangeEvent, MouseEvent, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './style';
import { attachment } from '../../assets/Admin';
import Deadline from './Deadline';
import { ReducerType } from '../../modules/store';
import { setFile } from '../../modules/reducer/AdminCreate';
import { trash } from '../../assets/Admin';

interface Props {}

const classes = ['class1', 'class2', 'class3', 'class4'];

const FilterForm: FC<Props> = (): ReactElement => {
  const { files: file } = useSelector((state: ReducerType) => state.AdminCreate);
  const dispatch = useDispatch();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    Object.entries(files).forEach(file => {
      dispatch(setFile(file[1]));
    });
  };
  const onClickDeleteFile = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const filteredFiles = file.filter(f => f.name !== e.currentTarget.dataset.name);
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
          {file.length === 0 ? (
            <>
              <img src={attachment} alt='attachment' title='attachment' />
              <span>첨부파일</span>
            </>
          ) : (
            <S.FiltersAttachmentFiles>
              {file.map(({ name, lastModified }: File) => (
                <S.FiltersAttachmentFilesItem key={lastModified}>
                  <span>{name}</span>
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
