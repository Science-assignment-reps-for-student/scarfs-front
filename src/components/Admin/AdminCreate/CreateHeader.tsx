import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './style';
import OptionButton from './OptionButton';
import { ReducerType } from '../../..//modules/store';
import {
  fetchCreateThunk,
  fetchUpdateThunk,
  fetchDeleteThunk,
} from '../../..//modules/reducer/AdminCreate';

interface Props {
  titleRef: React.MutableRefObject<any>;
  descRef: React.MutableRefObject<any>;
}

const CreateHeader: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const { assignmentId } = useParams();
  const create = useSelector((state: ReducerType) => state.AdminCreate);
  const dispatch = useDispatch();

  const getFilesFormData = (): FormData => {
    const data = new FormData();
    const { files } = create;
    files.length !== 0 &&
      files.forEach(file => {
        data.append('file[]', file);
      });
    return data;
  };

  const isDataDefault = (): boolean => {
    if (titleRef.current.value === '' || descRef.current.value === '') true;
    for (const t in create) {
      if (t === 'files') continue;
      if (create[t] === '') return true;
    }
    return false;
  };

  const onClickCreate = () => {
    if (isDataDefault()) {
      return alert('과제생성 요소들을 모두 입력해주세요.');
    }
    if (assignmentId) {
      dispatch(
        fetchUpdateThunk(assignmentId, getFilesFormData(), create, {
          title: titleRef.current.value,
          description: descRef.current.value,
        }),
      );
      return;
    }
    dispatch(fetchCreateThunk(getFilesFormData()));
  };

  const onClickDelete = () => {
    if (!confirm('정말로 삭제하시겠습니까?\n삭제하시면 복구가 불가능합니다.')) return;
    dispatch(fetchDeleteThunk(assignmentId));
  };

  return (
    <S.Header>
      <S.Title>{assignmentId ? '과제수정' : '과제생성'}</S.Title>
      <S.HeaderOption>
        <S.ButtonWrap>
          <OptionButton
            onClick={onClickCreate}
            imgType='saveImg'
            text={assignmentId ? '수정' : '저장'}
          />
          <OptionButton onClick={onClickDelete} imgType='trashImg' text='삭제' />
        </S.ButtonWrap>
      </S.HeaderOption>
    </S.Header>
  );
};

export default CreateHeader;
