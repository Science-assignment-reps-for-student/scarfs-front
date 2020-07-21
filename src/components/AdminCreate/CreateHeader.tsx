import React, { FC, ReactElement } from 'react';
import * as S from './style';
import OptionButton from './OptionButton';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerType } from '../../modules/store';
import { fetchCreateThunk } from '../../modules/reducer/AdminCreate';

interface Props {
  titleRef: React.MutableRefObject<any>;
  descRef: React.MutableRefObject<any>;
}

const CreateHeader: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const { files, deadline_1, deadline_2, deadline_3, deadline_4, type } = useSelector(
    (state: ReducerType) => state.AdminCreate,
  );
  const dispatch = useDispatch();

  const getFormData = (): FormData => {
    const data = new FormData();
    files.length !== 0 &&
      files.forEach(file => {
        data.append('file[]', file);
      });
    data.append('title', titleRef.current.value);
    data.append('description', descRef.current.value);
    data.append('type', type);
    data.append('deadline_1', deadline_1);
    data.append('deadline_2', deadline_2);
    data.append('deadline_3', deadline_3);
    data.append('deadline_4', deadline_4);
    return data;
  };

  const isDataDefault = (): boolean => {
    if (
      type === '' ||
      titleRef.current.value === '' ||
      descRef.current.value === '' ||
      deadline_1 === '' ||
      deadline_2 === '' ||
      deadline_3 === '' ||
      deadline_4 === ''
    )
      return true;
    return false;
  };

  const onClickCreate = () => {
    if (isDataDefault()) {
      alert('과제생성 요소들을 모두 입력해주세요.');
      return;
    }
    dispatch(fetchCreateThunk(getFormData()));
  };

  return (
    <S.Header>
      <S.Title>과제생성</S.Title>
      <S.HeaderOption>
        <S.ButtonWrap>
          <OptionButton onClick={onClickCreate} imgType='saveImg' text='저장' />
          <OptionButton imgType='trashImg' text='삭제' />
        </S.ButtonWrap>
      </S.HeaderOption>
    </S.Header>
  );
};

export default CreateHeader;
