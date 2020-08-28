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
  Update,
} from '../../../modules/reducer/AdminCreate';
import { createAlert, setCheckCallback } from '../../../modules/reducer/Alert';

interface Props {
  titleRef: MutableRefObject<any>;
  descRef: MutableRefObject<any>;
}

const CreateHeader: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const history = useHistory();
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const create = useSelector((state: ReducerType) => state.AdminCreate);
  const dispatch = useDispatch();

  const getFilesFormData = (): FormData => {
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
    for (const t in create) {
      if (t === 'files') continue;
      if (create[t] === '') return true;
    }
    return false;
  };

  const onClickCreate = () => {
    if (isDataDefault()) {
      dispatch(createAlert('과제생성 요소들을 모두 입력해주세요.'));
      return;
    }
    dispatch(fetchCreateThunk(getFilesFormData(), history, dispatch));
  };

  const onClickUpdate = () => {
    if (isDataDefault()) {
      dispatch(createAlert('과제생성 요소들을 모두 입력해주세요.'));
      return;
    }
    const update: Update = {
      assignmentId: assignmentId,
      create: create,
      description: descRef.current.value,
      fd: getFilesFormData(),
      title: titleRef.current.value,
    };
    dispatch(fetchUpdateThunk(update, history));
  };

  const onClickDelete = () => {
    dispatch(
      setCheckCallback(() => {
        dispatch(fetchDeleteThunk(assignmentId, history, dispatch));
      }),
    );
    dispatch(createAlert('정말로 삭제하시겠습니까?\n삭제하시면 복구가 불가능합니다.'));
  };

  return (
    <S.Header>
      <S.Title>{assignmentId ? '과제수정' : '과제생성'}</S.Title>
      <S.HeaderOption>
        <S.ButtonWrap>
          <OptionButton
            onClick={assignmentId ? onClickUpdate : onClickCreate}
            imgType='saveImg'
            text={assignmentId ? '수정' : '저장'}
          />
          {assignmentId && <OptionButton onClick={onClickDelete} imgType='trashImg' text='삭제' />}
        </S.ButtonWrap>
      </S.HeaderOption>
    </S.Header>
  );
};

export default CreateHeader;
