import React, { FC, useCallback } from 'react';
import * as S from './style';

interface Props {
  title: string;
  searchTitle: string;
  isTableView: boolean;
  setIsTableView: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const BoardHeader: FC<Props> = ({ title, searchTitle, isTableView, setIsTableView, children }) => {
  const turnOnTableView = useCallback(() => {
    setIsTableView(true);
  }, []);

  const turnOffTableView = useCallback(() => {
    setIsTableView(false);
  }, []);

  return (
    <S.BoardHeaderWrapper>
      <S.Header>
        {children}
        HOME {'>'} <S.Bold>{title}</S.Bold>
      </S.Header>
      <S.Main>
        <S.Title>{title}</S.Title>
        <S.Aside>
          <S.SearchBar>
            <S.SearchButton />
            <S.SearchInput placeholder={`검색할 ${searchTitle} 제목을 입력하세요.`} />
          </S.SearchBar>
          <S.TableTypeButton isActive={isTableView ? true : false} onClick={turnOnTableView} />
          <S.CardTypeButton isActive={isTableView ? false : true} onClick={turnOffTableView} />
        </S.Aside>
      </S.Main>
    </S.BoardHeaderWrapper>
  );
};

export default BoardHeader;
