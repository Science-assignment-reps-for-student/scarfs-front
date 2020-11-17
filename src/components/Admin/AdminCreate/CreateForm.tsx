import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';
import InputForm from './InputForm';
import FilterForm from './FilterForm';

import { PrevAssignments } from '../../../lib/type';
import { apiGetAssignments } from '../../../lib/api/Admin/create';

interface Props {
  titleRef: any;
  descRef: any;
}

const CreateForm: FC<Props> = ({ titleRef, descRef }): ReactElement => {
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
    type: 'personal',
    view: 0,
  });

  const getPrevAssignments = async () => {
    try {
      const res = await apiGetAssignments(params.assignmentId);
      setPrevAssignments(res.data);
    } catch (err) {
      if (err) {
        alert(`과제 정보를 불러올 수 없습니다. error code : ${err?.response?.status}`);
      }
    }
  };

  useEffect(() => {
    if (params.assignmentId) {
      getPrevAssignments();
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
