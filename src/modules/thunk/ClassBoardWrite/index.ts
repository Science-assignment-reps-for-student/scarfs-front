import { createRequestThunk } from '../../../lib/thunk';
import { WRITE_BOARD } from '../../reducer/ClassBoardWrite';
import { writeBoard } from '../../../lib/api/ClassBoardWrite';

export const writeBoardThunk = createRequestThunk(WRITE_BOARD, writeBoard);
