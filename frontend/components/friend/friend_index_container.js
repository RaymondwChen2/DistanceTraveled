import FriendIndex from './friend_finder'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship, requestFriends } from '../../actions/friend';
import { requestUserSearch } from '../../actions/user';

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    friends: entities.friends,
    users: entities.users
});

const mDTP = dispatch => ({
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendId => dispatch(deleteFriendship(friendId)),
    requestUserSearch: search => dispatch(requestUserSearch(search))
});

export default withRouter(connect(mSTP, mDTP)(FriendIndex));