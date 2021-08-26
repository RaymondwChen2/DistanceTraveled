import { connect } from 'react-redux';
import { requestRandomUsers, requestUser, requestUserSearch } from '../../actions/user_actions';
import { requestFriends } from '../../actions/friend_actions';
import FindFriends from './friend_finder';



const mSTP = ({ entities, session }) => {
    return {
        currentUser: entities.users[session.id],
        currentUserId: session.id,
        friendships: entities.friendships,
        users: entities.users
    }
};

const mDTP = dispatch => ({
    requestFriends: userId => dispatch(requestFriends(userId)),
    requestRandomUsers: () => dispatch(requestRandomUsers()),
    requestUserSearch: query => dispatch(requestUserSearch(query)),
    requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP)(FindFriends);