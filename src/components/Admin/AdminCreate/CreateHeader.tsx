import React, { FC, ReactElement, MutableRefObject } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';
import OptionButton from './OptionButton';

import { ReducerType } from '../../../modules/store';
import {
  fetchCreateThunk,
  fetchUpdateThunk,
  fetchDeleteThunk,
} from '../../../modules/reducer/AdminCreate';
import { createAlert, setCheckCallback } from '../../../modules/reducer/Alert';

interface Props {
  titleRef: MutableRefObject<HTMLInputElement>;
  descRef: MutableRefObject<HTMLTextAreaElement>;
}

const CreateHeader: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();
  const create = useSelector((state: ReducerType) => state.AdminCreate);
  const { assignmentId } = useParams<{ assignmentId: string }>();

  const getFormData = (): FormData => {
    const data = new FormData();
    const { files } = create;
    files.length !== 0 &&
      files.forEach(file => {
        data.append('file[]', file);
      });
    data.append('title', titleRef.current.value);
    data.append('description', descRef.current.value);
    data.append('type', create.typing);
    data.append('deadline_1', create.deadline_1);
    data.append('deadline_2', create.deadline_2);
    data.append('deadline_3', create.deadline_3);
    data.append('deadline_4', create.deadline_4);
    return data;
  };

  const isDataDefault = (): boolean => {
    if (titleRef.current.value === '' || descRef.current.value === '') return true;
    for (const item in create) {
      if (item === 'files') continue;
      if (create[item] === '') return true;
    }
    return false;
  };

  const handleCreate = () => {
    if (isDataDefault() || titleRef.current.value.search(/\//gi) !== -1) {
      dispatch(createAlert('과제생성 요소들을 모두 입력해주세요.'));
      return;
    }
    dispatch(fetchCreateThunk(getFormData(), history, dispatch));
  };

  const handleUpdate = () => {
    if (isDataDefault()) {
      dispatch(createAlert('과제생성 요소들을 모두 입력해주세요.'));
      return;
    }
    dispatch(fetchUpdateThunk(assignmentId, getFormData(), history, dispatch));
  };

  const handleDelete = () => {
    dispatch(
      setCheckCallback(() => {
        dispatch(fetchDeleteThunk(assignmentId, history, dispatch));
      }),
    );
    dispatch(createAlert('정말로 삭제하시겠습니까?\n삭제하시면 복구가 불가능합니다.'));
  };

  const handleCancel = () => {
    dispatch(
      setCheckCallback(() => {
        history.push('/admin');
      }),
    );
    dispatch(createAlert('정말로 삭제하시겠습니까?\n삭제하시면 복구가 불가능합니다.'));
  };

  return (
    <S.Header>
      <S.Title>{assignmentId ? '과제수정' : '과제생성'}</S.Title>
      <S.HeaderOption>
        <S.ButtonWrap>
          <OptionButton onClick={assignmentId ? handleUpdate : handleCreate} imgType='saveImg'>
            {assignmentId ? '수정' : '저장'}
          </OptionButton>
          <OptionButton onClick={assignmentId ? handleDelete : handleCancel} imgType='trashImg'>
            {assignmentId ? '삭제' : '취소'}
          </OptionButton>
        </S.ButtonWrap>
      </S.HeaderOption>
    </S.Header>
  );
};

export default CreateHeader;
