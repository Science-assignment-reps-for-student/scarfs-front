import { createRequestThunk } from '../.././../lib/thunk';
import { GET_BOARD } from '../../reducer/ClassBoard';
import { getClassBoard } from '../../../lib/api/ClassBoard';

export const getBoardThunk = createRequestThunk(GET_BOARD, getClassBoard);
