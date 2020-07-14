import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { AssignmentGuideBoardContainer } from '../containers';
import { HeaderContainer, MainContainer, WaveContainer } from '../containers';
const BoardRouter: FC = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={MainContainer} />
        {/* <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} /> */}
        <Redirect path='*' to='/error' />
      </Switch>
      <WaveContainer />
    </>
  );
};

export default BoardRouter;
