import { createStore, Store, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import adminPersonalModules, { StoreState } from '../reducer/Admin';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

type CombineState = StoreState;

export default function configureStore(): Store<CombineState> {
  const store = createStore(adminPersonalModules, composeEnhancers(applyMiddleware(ReduxThunk)));
  return store;
}
