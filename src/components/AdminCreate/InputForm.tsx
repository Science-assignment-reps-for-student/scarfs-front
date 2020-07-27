import React, { FC, ReactElement, ChangeEvent } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { setType, AssignmentTypings } from '../../modules/reducer/AdminCreate';

interface Props {
  titleRef: any;
  descRef: any;
}

const InputForm: FC<Props> = ({ titleRef, descRef }): ReactElement => {
  const dispatch = useDispatch();

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.currentTarget.value as AssignmentTypings));
  };

  return (
    <S.InputWrap>
      <S.FromTitle>과제 정보</S.FromTitle>
      <S.InputsCategoryWrap className='categoryWrap'>
        <S.InputsCategory
          defaultValue='category'
          onChange={onChangeType}
          name='category'
          id='category'
        >
          <S.InputsCategoryOption value='category' disabled={true}>
            카테고리
          </S.InputsCategoryOption>
          <S.InputsCategoryOption value='PERSONAL'>개인</S.InputsCategoryOption>
          <S.InputsCategoryOption value='TEAM'>팀</S.InputsCategoryOption>
          <S.InputsCategoryOption value='EXPERIMENT'>실험</S.InputsCategoryOption>
        </S.InputsCategory>
        <S.InputsAssignmentName type='text' placeholder='과제 이름' ref={titleRef} />
      </S.InputsCategoryWrap>
      <S.InputsTextarea
        name='description'
        id='description'
        ref={descRef}
        placeholder='과제 설명'
      ></S.InputsTextarea>
    </S.InputWrap>
  );
};

export default InputForm;
