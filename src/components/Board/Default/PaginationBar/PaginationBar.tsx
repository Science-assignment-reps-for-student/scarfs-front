import React, { FC } from 'react';
import * as S from './style';

const PaginationBar: FC = () => {
  return (
    <S.PaginationBarWrapper>
      <S.PageControllButton>◀</S.PageControllButton>
      <S.PageBlock>
        <S.PageButton className='active'>1</S.PageButton>
        <S.PageButton>2</S.PageButton>
        <S.PageButton>3</S.PageButton>
        <S.PageButton>4</S.PageButton>
        <S.PageButton>5</S.PageButton>
      </S.PageBlock>
      <S.PageControllButton>▶</S.PageControllButton>
    </S.PaginationBarWrapper>
  );
};

export default PaginationBar;
