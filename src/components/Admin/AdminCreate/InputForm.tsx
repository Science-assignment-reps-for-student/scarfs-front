import React, { FC, ReactElement, ChangeEvent, MutableRefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as S from './style';

import { setType, AssignmentTypings } from '../../../modules/reducer/AdminCreate';
import { reducerType } from '../../../modules/reducer';
import { PrevAssignments } from '../../../lib/type';

interface Props {
  titleRef: MutableRefObject<HTMLInputElement>;
  descRef: MutableRefObject<HTMLTextAreaElement>;
  prevAssignments: PrevAssignments;
}

const InputForm: FC<Props> = ({ titleRef, descRef, prevAssignments }): ReactElement => {
  const params = useParams<{ assignmentId: string }>();
  const dispatch = useDispatch();
  const { typing } = useSelector((state: reducerType) => state.AdminCreate);
  const { title, description } = prevAssignments;

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.currentTarget.value as AssignmentTypings));
  };

  return (
    <S.InputWrap>
      <S.FromTitle>과제 정보</S.FromTitle>
      <S.InputsCategoryWrap className='categoryWrap'>
        <S.InputsCategory
          value={!params.assignmentId ? 'category' : typing}
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
