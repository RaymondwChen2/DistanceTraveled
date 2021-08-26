import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import Greeting from './greeting';


const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Greeting);