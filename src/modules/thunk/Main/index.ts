import { GET_BOARD, GET_ASSIGNMENT, GET_USER_INFO } from '../../reducer/Main';
import { getAssignment, getBoard, getUserInfo } from '../../../lib/api/Assignment/Assignment';
import { createRequestThunk } from '../../../lib/thunk';

export const getBoardThunk = createRequestThunk(GET_BOARD, getBoard);
export const getAssignmentThunk = createRequestThunk(GET_ASSIGNMENT, getAssignment);
export const getUserInfoThunk = createRequestThunk(GET_USER_INFO, getUserInfo);
