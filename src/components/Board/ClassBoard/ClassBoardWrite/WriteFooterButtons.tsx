import React, { FC, useEffect } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createAlert, AlertModalTypes, AlertState } from '../../../../modules/reducer/Alert';
import { getStateCallback } from '../../../../lib/function';

interface Props {
  isEditMode: boolean;
}

const WriteFooterButtons: FC<Props> = ({ isEditMode }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { returnValue } = useSelector(getStateCallback<AlertState>('Alert'));
  const onClickDelete = () => {
    dispatch(createAlert('게시글을 정말 삭제하시겠습니까?'));
  };
  useEffect(() => {
    if (returnValue) {
      console.log('삭제함 ㅅㄱ');
    } else {
      console.log('삭제안할게 ㅎㅎ');
    }
  }, [returnValue]);
  return (
    <S.FooterWrapper>
      <S.BlueButton>{isEditMode ? '수정하기' : '등록하기'}</S.BlueButton>
      {isEditMode && <S.BlueButton onClick={onClickDelete}>삭제하기</S.BlueButton>}
      <S.BlackButton onClick={() => history.push('/board/class')}>취소</S.BlackButton>
    </S.FooterWrapper>
  );
};

export default WriteFooterButtons;
