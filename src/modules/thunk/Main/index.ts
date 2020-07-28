import { GET_ASSIGNMENT_FAILURE, ASSIGNMENT, GET_BOARD_FAILURE, BOARD } from '../../reducer/Main';
import { getAssignment, getBoard } from '../../../lib/api/Assignment/Assignment';

export const getBoardThunk = () => {
  return () => async dispatch => {
    try {
      const payload = await getBoard();
      dispatch({ type: BOARD, payload });
    } catch (err) {
      dispatch({ type: GET_BOARD_FAILURE, payload: err });
    }
  };
};

export const getAssignmentThunk = () => {
  return () => async dispatch => {
    try {
      const payload = await getAssignment();
      dispatch({ type: ASSIGNMENT, payload });
    } catch (err) {
      dispatch({ type: GET_ASSIGNMENT_FAILURE, payload: err });
    }
  };
};
