import { createRequestThunk } from '../.././../lib/thunk';
import { GET_BOARD, SEARCH_CLASS_BOARD } from '../../reducer/ClassBoard';
import { getClassBoard, searchClassBoard } from '../../../lib/api/ClassBoard';

export const getBoardThunk = createRequestThunk(GET_BOARD, getClassBoard);
export const searchClassBoardThunk = createRequestThunk(SEARCH_CLASS_BOARD, searchClassBoard);
