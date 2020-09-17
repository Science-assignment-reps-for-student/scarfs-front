import { combineReducers } from 'redux';
import Modal from './Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Admin from './Admin';
import AdminCreate from './AdminCreate';
import AdminLogin from './AdminLogin';
import AdminQnA from './AdminQnA';
import Header from './Header';
import Alert from './Alert';
import Main from './Main';
import Chatting from './Chatting';
import Loading from './Loading';
import ClassBoard from './ClassBoard';
import ClassDetailPost from './ClassDetailPost';
import ClassBoardWrite from './ClassBoardWrite';
import Comment from './Comment';
import NoticeDetailPost from './NoticeDetailPost';
import AssignmentDetailPost from './AssignmentDetailPost';
import FileSubmit from './FileSubmit';
import BoardCommon from './BoardCommon';
import CreateTeam from './CreateTeam';
import DeleteTeam from './DeleteTeam';
import AddTeamMember from './AddTeamMember';
import Evaluation from './Evaluation';

const rootReducer = combineReducers({
  Modal,
  SignIn,
  SignUp,
  Admin,
  AdminCreate,
  AdminLogin,
  AdminQnA,
  Header,
  Alert,
  Main,
  Chatting,
  Loading,
  ClassBoard,
  ClassDetailPost,
  ClassBoardWrite,
  Comment,
  NoticeDetailPost,
  AssignmentDetailPost,
  FileSubmit,
  BoardCommon,
  CreateTeam,
  DeleteTeam,
  AddTeamMember,
  Evaluation,
});

type reducerType = ReturnType<typeof rootReducer>;
export { reducerType };
export default rootReducer;
