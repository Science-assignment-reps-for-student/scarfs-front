import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AssignmentGuideBoardContainer,
  ClassBoardContainer,
  NoticeBoardContainer,
  AssignmentDetailPostContainer,
  NoticeDetailPostContainer,
} from '../containers';
import { Board } from '../components/Board/Default';

const BoardRouter: FC = () => {
  return (
    <Board>
      <Switch>
        <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} />
        <Route exact path='/board/assignment-guide/:id' component={AssignmentDetailPostContainer} />
        <Route exact path='/board/class' component={ClassBoardContainer} />
        <Route exact path='/board/notice' component={NoticeBoardContainer} />
        <Route exact path='/board/notice/:id' component={NoticeDetailPostContainer} />
        <Redirect path='*' to='/error' />
      </Switch>
    </Board>
  );
};

export default BoardRouter;
