import React, { FC, ReactElement, useCallback, useEffect, useRef } from 'react';
import * as S from './style';
import { save, trash, attachment } from '../../assets/Admin';

interface Props {}

const classes = ['class1', 'class2', 'class3', 'class4'];

const AdminCreate: FC<Props> = (): ReactElement => {
  const dateInput = useRef(null);

  const setMinDate = useCallback((): string => {
    const today = new Date();
    const fullYear: number = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const date: number = today.getDate();
    return `${fullYear}-${month < 10 ? `0${month}` : month}-${date}`;
  }, []);

  return (
    <S.AdminCreateWrap>
      <S.Position>
        <S.Header>
          <S.Title>과제생성</S.Title>
          <S.HeaderOption>
            <S.ButtonWrap>
              <S.Button>
                <S.ButtonImg src={save} alt='save' title='save' />
                <S.ButtonText>저장</S.ButtonText>
              </S.Button>
              <S.Button>
                <S.ButtonImg src={trash} alt='trash' title='trash' />
                <S.ButtonText>삭제</S.ButtonText>
              </S.Button>
            </S.ButtonWrap>
            <S.DeadlineWrap>
              <S.DeadlineText>종료 :</S.DeadlineText>
              <S.Deadline type='date' name='deadline' min={setMinDate()} />
            </S.DeadlineWrap>
          </S.HeaderOption>
        </S.Header>
        <S.FormWrap>
          <S.InputWrap>
            <S.FromTitle>과제 정보</S.FromTitle>
            <S.InputsCategoryWrap className='categoryWrap'>
              <S.InputsCategory defaultValue='category' name='category' id='category'>
                <S.InputsCategoryOption value='category' disabled={true}>
                  카테고리
                </S.InputsCategoryOption>
                <S.InputsCategoryOption value='personal'>개인</S.InputsCategoryOption>
                <S.InputsCategoryOption value='team'>팀</S.InputsCategoryOption>
                <S.InputsCategoryOption value='experiment'>실험</S.InputsCategoryOption>
              </S.InputsCategory>
              <S.InputsAssignmentName type='text' placeholder='과제 이름' />
            </S.InputsCategoryWrap>
            <S.InputsTextarea
              name='description'
              id='description'
              placeholder='과제 설명'
            ></S.InputsTextarea>
          </S.InputWrap>
          <S.Filters>
            <S.FromTitle>반 정보</S.FromTitle>
            <S.FiltersClasses>
              {classes.map(_class => {
                return (
                  <S.FiltersClassesItem key={_class}>
                    <S.FiltersClassesItemLabel htmlFor={_class}>
                      <input type='checkbox' name={_class} id={_class} />
                      {_class[_class.length - 1]}반
                    </S.FiltersClassesItemLabel>
                  </S.FiltersClassesItem>
                );
              })}
            </S.FiltersClasses>
            <S.FiltersAttachment>
              <input type='file' name='attachment' id='attachment' hidden={true} />
              <label htmlFor='attachment'>
                <img src={attachment} alt='attachment' title='attachment' />
                <span>첨부파일</span>
              </label>
            </S.FiltersAttachment>
          </S.Filters>
        </S.FormWrap>
      </S.Position>
    </S.AdminCreateWrap>
  );
};

export default AdminCreate;
