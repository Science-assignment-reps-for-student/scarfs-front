import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../style';

const HeaderSearch: FC = () => {
  const history = useHistory();
  const [searchValue, valueChange] = useState<string>('');
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(`/board/assignment-guide?query=${searchValue}`);
      history.push(`/board/assignment-guide?query=${searchValue}`);
    }
  };
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    valueChange(event.target.value);
  };
  return (
    <S.HeaderSearch>
      <div />
      <input
        placeholder='검색할 과제 제목을 입력하세요'
        onChange={onChangeHandler}
        onKeyPress={keyPressHandler}
      />
    </S.HeaderSearch>
  );
};

export default HeaderSearch;
