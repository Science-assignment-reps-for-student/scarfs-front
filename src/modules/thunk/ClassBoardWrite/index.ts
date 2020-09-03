import { createRequestThunk } from '../../../lib/thunk';
import { WRITE_BOARD, UPDATE_BOARD } from '../../reducer/ClassBoardWrite';
import { writeBoard, updateBoard } from '../../../lib/api/ClassBoardWrite';

export const writeBoardThunk = createRequestThunk(WRITE_BOARD, writeBoard);
export const updateBoardThunk = createRequestThunk(UPDATE_BOARD, updateBoard);
