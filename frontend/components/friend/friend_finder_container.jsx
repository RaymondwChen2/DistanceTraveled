import FriendFinder from './friend_finder'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteFriendship, requestFriends } from '../../actions/friend';
import { requestUserSearch } from '../../actions/user';

const mSTP = () => ({

});

const mDTP = dispatch => ({
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId)),
    requestUserSearch: search => dispatch(requestUserSearch(search))
});

export default withRouter(connect(mSTP, mDTP)(FriendFinder));