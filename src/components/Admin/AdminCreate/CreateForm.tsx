import React, { FC, ReactElement } from 'react';
import * as S from './style';
import InputForm from './InputForm';
import FilterForm from './FilterForm';

interface Props {
  titleRef: any;
  descRef: any;
}

const CreateForm: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  return (
    <S.FormWrap>
      <InputForm titleRef={titleRef} descRef={descRef} />
      <FilterForm />
    </S.FormWrap>
  );
};

export default CreateForm;
