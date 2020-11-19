import React, { FC, MutableRefObject, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as S from './style';
import InputForm from './InputForm';
import FilterForm from './FilterForm';

import { reset, setDeadline, setType } from '../../../modules/reducer/AdminCreate';
import { PrevAssignments } from '../../../lib/type';
import { apiGetAssignments } from '../../../lib/api/Admin/create';
import { tokenReIssuance } from '../../../lib/api/Admin/admin';

interface Props {
  titleRef: MutableRefObject<HTMLInputElement>;
  descRef: MutableRefObject<HTMLTextAreaElement>;
}

const localDeadline = (deadline: number) => {
  const d = new Date((deadline - 32400) * 1000);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const CreateForm: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const dispatch = useDispatch();
  const params = useParams<{ assignmentId: string }>();
  const [prevAssignments, setPrevAssignments] = useState<PrevAssignments>({
    id: 0,
    created_at: 0,
    deadline_1: 0,
    deadline_2: 0,
    deadline_3: 0,
    deadline_4: 0,
    title: '',
    description: '',
    type: 'PERSONAL',
    view: 0,
  });

  const setAssignments = async () => {
    const res = await apiGetAssignments(params.assignmentId);
    const data = res.data;
    setPrevAssignments(data);
    dispatch(setType(data.type));
    dispatch(setDeadline(localDeadline(data.deadline_1), 1));
    dispatch(setDeadline(localDeadline(data.deadline_2), 2));
    dispatch(setDeadline(localDeadline(data.deadline_3), 3));
    dispatch(setDeadline(localDeadline(data.deadline_4), 4));
  };

  const getPrevAssignments = async () => {
    try {
      await setAssignments();
    } catch (err) {
      if (err) {
        if (err.response.status === 401) {
          await tokenReIssuance();
          await setAssignments();
        }
        alert(`과제 정보를 불러올 수 없습니다. error code : ${err?.response?.status}`);
      }
    }
  };

  useEffect(() => {
    if (params.assignmentId) {
      getPrevAssignments();
    } else {
      dispatch(reset());
      titleRef.current.value = '';
      descRef.current.value = '';
    }
  }, [params]);

  return (
    <S.FormWrap>
      <InputForm titleRef={titleRef} descRef={descRef} prevAssignments={prevAssignments} />
      <FilterForm prevAssignments={prevAssignments} />
    </S.FormWrap>
  );
};

export default CreateForm;
