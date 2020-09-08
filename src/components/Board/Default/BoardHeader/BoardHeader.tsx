import React, { FC, useCallback, useState, useEffect } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

enum Uri {
  '공지' = '/board/notice',
  '과제' = '/board/assignment-guide',
  '게시판' = '/board/class',
}

interface Props {
  title: string;
  searchTitle: string;
  isTableView: boolean;
  setIsTableView: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const BoardHeader: FC<Props> = ({ title, searchTitle, isTableView, setIsTableView, children }) => {
  const { query } = queryString.parse(location.search);
  const history = useHistory();
  const [text, setText] = useState<string>('');
  const turnOnTableView = useCallback(() => {
    setIsTableView(true);
    localStorage.setItem('isTableView', 'true');
  }, []);

  const turnOffTableView = useCallback(() => {
    setIsTableView(false);
    localStorage.setItem('isTableView', 'false');
  }, []);

  const goTitle = useCallback(() => {
    history.push(Uri[title]);
  }, []);

  const searchBoards = useCallback(() => {
    history.push(`${Uri[searchTitle]}?query=${text}`);
  }, [text]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchBoards();
    }
  };

  useEffect(() => {
    if (typeof query === 'object') {
      setText(query[0]);
    } else if (query) {
      setText(query);
    } else {
      setText('');
    }
  }, [query]);

  return (
    <S.BoardHeaderWrapper>
      <S.Header>
        {children}
        HOME {'>'} <S.Bold onClick={goTitle}>{title}</S.Bold>
      </S.Header>
      <S.Main>
        <S.Title onClick={goTitle}>{title}</S.Title>
        <S.Aside>
          <S.SearchBar>
            <S.SearchButton onClick={searchBoards} />
            <S.SearchInput
              placeholder={`검색할 ${searchTitle} 제목을 입력하세요.`}
              value={text}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </S.SearchBar>
          <S.TableTypeButton isActive={isTableView ? true : false} onClick={turnOnTableView} />
          <S.CardTypeButton isActive={isTableView ? false : true} onClick={turnOffTableView} />
        </S.Aside>
      </S.Main>
    </S.BoardHeaderWrapper>
  );
};

export default BoardHeader;
