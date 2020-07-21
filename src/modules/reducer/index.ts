import { combineReducers } from 'redux';
import Modal from './Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Admin from './Admin';
import AdminCreate from './AdminCreate';

const rootReducer = combineReducers({
  Modal,
  SignIn,
  SignUp,
  Admin,
  AdminCreate,
});

type reducerType = ReturnType<typeof rootReducer>;
export { reducerType };
export default rootReducer;
