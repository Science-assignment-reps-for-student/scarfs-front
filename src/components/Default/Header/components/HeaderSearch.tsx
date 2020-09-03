import React, { FC } from 'react';
import * as S from '../style';

const HeaderSearch: FC = () => {
  return (
    <S.HeaderSearch>
      <div />
      <input placeholder='검색할 과제 제목을 입력하세요' />
    </S.HeaderSearch>
  );
};

export default HeaderSearch;
