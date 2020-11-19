import React, { FC, ReactElement, useCallback, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './style';

import { setDeadline } from '../../../modules/reducer/AdminCreate';
import { reducerType } from 'src/modules/reducer';
import { useParams } from 'react-router-dom';

interface Props {
  _class: string;
  deadline: number;
}

const getLocalDeadline = (deadline: number) => {
  const KOREAN_TIME_ZONE = 32400,
    PYTHON_TO_DATE = 1000;
  const cT = new Date((deadline - KOREAN_TIME_ZONE) * PYTHON_TO_DATE);
  return `${cT.getFullYear()}-${cT.getMonth() + 1}-${cT.getDate()}`;
};

const Deadline: FC<Props> = ({ _class, deadline }): ReactElement => {
  const params = useParams<{ assignmentId: string }>();
  const dispatch = useDispatch();
  const adminCreate = useSelector((state: reducerType) => state.AdminCreate);

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
        value={
          !params.assignmentId
            ? ''
            : adminCreate[`deadline_${_class[_class.length - 1]}`] || getLocalDeadline(deadline)
        }
      />
    </S.DeadlineWrap>
  );
};

export default Deadline;
