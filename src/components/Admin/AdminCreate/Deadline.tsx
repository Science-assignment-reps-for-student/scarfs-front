import React, { FC, ReactElement, useCallback, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './style';
import { setDeadline } from '../../..//modules/reducer/AdminCreate';

interface Props {
  _class: string;
}

const Deadline: FC<Props> = ({ _class }): ReactElement => {
  const dispatch = useDispatch();

  const setMinDate = useCallback((): string => {
    const today = new Date();
    const fullYear: number = today.getFullYear();
    const month: number = today.getMonth() + 1;
    const date: number = today.getDate();
    return `${fullYear}-${month < 10 ? `0${month}` : month}-${date}`;
  }, []);

  const onChangeDeadline = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      dataset: { _class },
    } = e.currentTarget;
    dispatch(setDeadline(value, parseInt(_class[_class.length - 1], 10)));
  };

  return (
    <S.DeadlineWrap>
      <S.DeadlineText>종료 :</S.DeadlineText>
      <S.Deadline
        type='date'
        name='deadline'
        onChange={onChangeDeadline}
        min={setMinDate()}
        data-_class={_class}
      />
    </S.DeadlineWrap>
  );
};

export default Deadline;
