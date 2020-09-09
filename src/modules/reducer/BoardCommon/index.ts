export const SET_IS_DETAIL_BOARD = 'BoardCommon/IS_DETAIL_BOARD' as const;

export const setIsDetailBoard = (payload: boolean) => ({
  type: SET_IS_DETAIL_BOARD,
  payload,
});

export type BoardCommonAction = ReturnType<typeof setIsDetailBoard>;

export interface BoardCommonStatus {
  isDetailBoard: boolean;
}

const initialState: BoardCommonStatus = {
  isDetailBoard: false,
};

export default function BoardCommon(
  state: BoardCommonStatus = initialState,
  action: BoardCommonAction,
) {
  switch (action.type) {
    case SET_IS_DETAIL_BOARD:
      return {
        ...state,
        isDetailBoard: action.payload,
      };
    default:
      return state;
  }
}
