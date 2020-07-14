import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { AssignmentGuideBoardContainer } from '../containers';
import { HeaderContainer } from '../containers';
const BoardRouter: FC = () => {
  console.log(1);
  return (
    <>
      <HeaderContainer />
      <Switch>
        {/* <Route exact path="/" component={MainContainer} />  */}
        {/* <Route exact path='/board/assignment-guide' component={AssignmentGuideBoardContainer} /> */}
        <Redirect path='*' to='/error' />
      </Switch>
    </>
  );
};

export default BoardRouter;
