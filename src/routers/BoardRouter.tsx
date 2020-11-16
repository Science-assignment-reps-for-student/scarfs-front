import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AssignmentGuideBoardContainer,
  ClassBoardContainer,
  NoticeBoardContainer,
  AssignmentDetailPostContainer,
  ClassDetailPostContainer,
  NoticeDetailPostContainer,
  EvaluationContainer,
  ClassBoardWriteContainer,
  NoticeBoardWriteContainer,
} from '../containers';
import { Board } from '../components/Board/Default';
import { useBoardCommon } from '../lib/function';

const BoardRouter: FC = () => {
  const {
    isDetailBoard: [isDetailBoard],
  } = useBoardCommon();
  return (
    <Board isDetailBoard={isDetailBoard}>
      <Switch>
        <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} />
        <Route exact path='/board/assignment-guide/:id' component={AssignmentDetailPostContainer} />
        <Route
          exact
          path='/board/assignment-guide/:id/evaluation'
          component={EvaluationContainer}
        />
        <Route exact path='/board/class' component={ClassBoardContainer} />
        <Route exact path='/board/class/write' component={ClassBoardWriteContainer} />
        <Route exact path='/board/class/:id' component={ClassDetailPostContainer} />
        <Route exact path='/board/notice' component={NoticeBoardContainer} />
        <Route exact path='/board/notice/write' component={NoticeBoardWriteContainer} />
        <Route exact path='/board/notice/:id' component={NoticeDetailPostContainer} />
        <Redirect path='*' to='/error' />
      </Switch>
    </Board>
  );
};

export default BoardRouter;
