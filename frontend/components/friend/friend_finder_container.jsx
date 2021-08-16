import FriendFinder from './friend_finder'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship, requestFriends } from '../../actions/friend';

const mSTP = () => ({

});

const mDTP = dispatch => ({
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId))
});

export default withRouter(connect(mSTP, mDTP)(FriendFinder));