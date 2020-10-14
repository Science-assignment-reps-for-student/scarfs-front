import React, { FC, ReactElement, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './style';
import CreateHeader from './CreateHeader';
import CreateForm from './CreateForm';

import { reset } from '../../../modules/reducer/AdminCreate';
import { createAlert } from '../../../modules/reducer/Alert';

interface Props {}

const AdminCreate: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ assignmentId: string }>();

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      titleRef.current.value = '';
      descRef.current.value = '';
      dispatch(reset());
    };
  }, []);

  useEffect(() => {
    if (params?.assignmentId && isNaN(+params?.assignmentId)) {
      dispatch(createAlert('수정할 수 없는 과제입니다. 다시 접속해주세요.'));
      history.goBack();
    }
  }, [params]);

  return (
    <S.AdminCreateWrap>
      <S.Position>
        <CreateHeader titleRef={titleRef} descRef={descRef} />
        <CreateForm titleRef={titleRef} descRef={descRef} />
      </S.Position>
    </S.AdminCreateWrap>
  );
};

export default AdminCreate;
