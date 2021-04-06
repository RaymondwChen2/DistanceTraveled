import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import Greeting from './greeting';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Greeting);
