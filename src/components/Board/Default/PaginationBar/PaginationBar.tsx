import React, { FC, useMemo, useCallback } from 'react';
import * as S from './style';

interface Props {
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  lastPage?: number;
}

const isCanGoPrevPage = changePage => (changePage >= 1 ? true : false);
const isCanGoNextPage = (changePage, lastPage) => (changePage <= lastPage ? true : false);
const PaginationBar: FC<Props> = ({ page, setPage, lastPage }) => {
  const startPage = useMemo(() => Math.floor((page - 1) / 5) * 5 + 1, [page]);
  const prevChangePage = useMemo(() => startPage - 1, [startPage]);
  const nextChangePage = useMemo(() => startPage + 5, [startPage]);
  const goPrevPage = useCallback(() => {
    if (isCanGoPrevPage(prevChangePage)) setPage(prevChangePage);
  }, [prevChangePage]);
  const goNextPage = useCallback(() => {
    if (isCanGoNextPage(nextChangePage, lastPage)) setPage(nextChangePage);
  }, [nextChangePage, lastPage]);
  const getPageButtons = useCallback(() => {
    const jsx = [];
    for (let i = startPage; i < startPage + 5; i++) {
      if (i > lastPage) break;
      jsx.push(
        <S.PageButton key={i} className={page === i && 'active'} onClick={() => setPage(i)}>
          {i}
        </S.PageButton>,
      );
    }
    return jsx;
  }, [startPage, lastPage]);
  return (
    <S.PaginationBarWrapper>
      <nav>
        {isCanGoPrevPage(prevChangePage) && (
          <S.PageControllButton onClick={goPrevPage}>◀</S.PageControllButton>
        )}
      </nav>
      <S.PageBlock>{getPageButtons()}</S.PageBlock>
      <nav>
        {isCanGoNextPage(nextChangePage, lastPage) && (
          <S.PageControllButton onClick={goNextPage}>▶</S.PageControllButton>
        )}
      </nav>
    </S.PaginationBarWrapper>
  );
};

export default PaginationBar;
