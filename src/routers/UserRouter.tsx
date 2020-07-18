import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  HeaderContainer,
  MainContainer,
  WaveContainer,
  AssignmentGuideBoardContainer,
  // ClassBoardContainer,
  // NoticeBoardContainer,
} from '../containers';
import { Banner } from './style';

const BoardRouter: FC = () => {
  return (
    <>
      <HeaderContainer />
      <Banner />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} />
        {/* <Route exact path='/board/class' component={ClassBoardContainer} />
        <Route exact path='/board/notice' component={NoticeBoardContainer} /> */}
        <Redirect path='*' to='/error' />
      </Switch>
      <WaveContainer />
    </>
  );
};

export default BoardRouter;
