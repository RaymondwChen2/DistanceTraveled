import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUser } from "../../actions/user";
import { fetchRoutesLogs } from "../../actions/routeslog";
import { createFriendship, deleteFriendship, requestFriends } from '../../actions/friend';

const mSTP = ({ entities, session}, ownProps) => {
    return {
        user: entities.users[ownProps.match.params.userId],
        routes: entities.routes,
        friends: entities.friends,
        currentUser: entities.users[session.id]
    };
};

const mDTP = dispatch => ({
    requestUser: userId => dispatch(requestUser(userId)),
    requestRoutes: userId => dispatch(fetchRoutesLogs(userId)),
    createFriendship: friends => dispatch(createFriendship(friend)),
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendId => dispatch(deleteFriendship(friendId))
});



export default connect(mSTP, mDTP)(UserShow);