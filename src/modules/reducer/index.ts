import { combineReducers } from 'redux';
import Modal from './Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Admin from './Admin';
import AdminCreate from './AdminCreate';
import AdminLogin from './AdminLogin';
import Header from './Header';
import Alert from './Alert';
import Main from './Main';
import Chatting from './Chatting';
import Loading from './Loading';
import ClassBoard from './ClassBoard';
import ClassDetailPost from './ClassDetailPost';

const rootReducer = combineReducers({
  Modal,
  SignIn,
  SignUp,
  Admin,
  AdminCreate,
  AdminLogin,
  Header,
  Alert,
  Main,
  Chatting,
  Loading,
  ClassBoard,
  ClassDetailPost,
});

type reducerType = ReturnType<typeof rootReducer>;
export { reducerType };
export default rootReducer;
