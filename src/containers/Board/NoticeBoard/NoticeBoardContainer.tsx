import React, { FC, useCallback } from 'react';
import { NoticeBoard } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getStateCallback } from '../../../lib/function';
import { MainState, resetMain as createResetMainAction } from '../../../modules/reducer/Main';
import { getBoardThunk } from '../../../modules/thunk/Main';
import { LoadingState } from '../../../modules/reducer/Loading';

const NoticeBoardContainer: FC = () => {
  const dispatch = useDispatch();
  const { boardPreview, error } = useSelector(getStateCallback<MainState>('Main'));

  const { 'Main/GET_BOARD': isLoading } = useSelector(getStateCallback<LoadingState>('Loading'));

  const getBoards = useCallback(
    (page: number) => {
      dispatch(getBoardThunk({ size: 7, page }));
    },
    [dispatch],
  );

  const resetMain = useCallback(() => {
    dispatch(createResetMainAction());
  }, [dispatch]);

  return (
    <NoticeBoard
      getBoards={getBoards}
      isLoading={isLoading}
      board={boardPreview}
      getBoardsError={error}
      resetMain={resetMain}
    />
  );
};

export default NoticeBoardContainer;
