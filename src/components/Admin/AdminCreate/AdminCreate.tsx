import React, { FC, ReactElement, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './style';
import CreateHeader from './CreateHeader';
import CreateForm from './CreateForm';

import { reset } from '../../../modules/reducer/AdminCreate';

interface Props {}

const AdminCreate: FC<Props> = (): ReactElement => {
  const dispatch = useDispatch();

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    return () => {
      titleRef.current.value = '';
      descRef.current.value = '';
      dispatch(reset());
    };
  }, []);

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
