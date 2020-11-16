import React, { FC, ReactElement, ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './style';

import { setType, AssignmentTypings } from '../../../modules/reducer/AdminCreate';
import { PrevAssignments } from '../../../lib/type';
import { useParams } from 'react-router-dom';

interface Props {
  titleRef: any;
  descRef: any;
  prevAssignments: PrevAssignments;
}

const InputForm: FC<Props> = ({ titleRef, descRef, prevAssignments }): ReactElement => {
  const params = useParams<{ assignmentId: string }>();
  const dispatch = useDispatch();
  const { title, description, type } = prevAssignments;
  const [categoryType, setCategoryType] = useState<'PERSONAL' | 'TEAM' | 'EXPERIMENT'>(
    type === 'PERSONAL' ? 'PERSONAL' : type === 'TEAM' ? 'TEAM' : 'EXPERIMENT',
  );

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.currentTarget.value as AssignmentTypings));
  };

  useEffect(() => {
    dispatch(setType(categoryType));
    setCategoryType(type === 'PERSONAL' ? 'PERSONAL' : type === 'TEAM' ? 'TEAM' : 'EXPERIMENT');
  }, [prevAssignments]);

  return (
    <S.InputWrap>
      <S.FromTitle>과제 정보</S.FromTitle>
      <S.InputsCategoryWrap className='categoryWrap'>
        <S.InputsCategory
          value={!params.assignmentId ? 'category' : categoryType}
          onChange={onChangeType}
          name='category'
          id='category'
        >
          {!params.assignmentId && (
            <S.InputsCategoryOption value='category' disabled={true}>
              카테고리
            </S.InputsCategoryOption>
          )}
          <S.InputsCategoryOption value='PERSONAL'>개인</S.InputsCategoryOption>
          <S.InputsCategoryOption value='TEAM'>팀</S.InputsCategoryOption>
          <S.InputsCategoryOption value='EXPERIMENT'>실험</S.InputsCategoryOption>
        </S.InputsCategory>
        <S.InputsAssignmentName
          type='text'
          placeholder='과제 이름'
          ref={titleRef}
          defaultValue={title}
        />
      </S.InputsCategoryWrap>
      <S.InputsTextarea
        name='description'
        id='description'
        ref={descRef}
        placeholder='과제 설명'
        defaultValue={description}
      ></S.InputsTextarea>
    </S.InputWrap>
  );
};

export default InputForm;
