import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AssignmentGuideBoardContainer } from '../containers';
import { NotFound } from '../components/';

const BoardRouter: FC = () => {
  return (
    <Switch>
      {/* <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} /> */}
      <Route component={NotFound} />
    </Switch>
  );
};

export default BoardRouter;
