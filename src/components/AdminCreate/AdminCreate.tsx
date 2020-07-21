import React, { FC, ReactElement, useRef } from 'react';
import * as S from './style';
import CreateHeader from './CreateHeader';
import CreateForm from './CreateForm';

interface Props {}

const AdminCreate: FC<Props> = (): ReactElement => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

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
