import { combineReducers } from 'redux';
import Modal from './Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

const rootReducer = combineReducers({
  Modal,
  SignIn,
  SignUp,
});

type reducerType = ReturnType<typeof rootReducer>;
export { reducerType };
export default rootReducer;
