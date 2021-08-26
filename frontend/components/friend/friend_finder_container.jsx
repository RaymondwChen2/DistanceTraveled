import FriendFinder from './friend_finder'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship, requestFriends } from '../../actions/friend';
import { requestUserSearch, requestUser, requestRandomUsers } from '../../actions/user';

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    currentUserId: session.id,
    friends: entities.friends,
    users: entities.users
});

const mDTP = dispatch => ({
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendId => dispatch(deleteFriendship(friendId)),
    requestUserSearch: search => dispatch(requestUserSearch(search)),
    requestUser: userId => dispatch(requestUser(userId)),
    requestRandomUsers: () => dispatch(requestRandomUsers())
});

export default withRouter(connect(mSTP, mDTP)(FriendFinder));