import React, { FC, ReactElement } from 'react';
import * as S from './style';
import { search as searchSvg } from '../../../assets/Admin';

interface Props {
  onChangeSearch: any;
  onClickToggleModal: any;
}

const AdminHeader: FC<Props> = ({ onChangeSearch, onClickToggleModal }): ReactElement => {
  return (
    <S.QnAHeader>
      <h1>QnA</h1>
      <S.QnAHeaderSearchWrap>
        <S.QnAHeaderSearchInputWrap>
          <S.OnAHeaderSearchImg src={searchSvg} alt='search' title='search' />
          <S.QnAHeaderSearchInput
            type='text'
            onChange={onChangeSearch}
            placeholder='학번이나 이름을 입력하세요.'
          />
        </S.QnAHeaderSearchInputWrap>
        <S.QnAHeaderSearchButton onClick={onClickToggleModal}>새로운 대화</S.QnAHeaderSearchButton>
      </S.QnAHeaderSearchWrap>
    </S.QnAHeader>
  );
};

export default AdminHeader;
