import { connect } from "react-redux";
import UserShow from "./user_show";
import { requestUser } from "../../actions/user_actions";
import { fetchRoutesLogs } from "../../actions/routeslog_actions";
import { createFriendship, deleteFriendship, requestFriends } from "../../actions/friend_actions";

const mSTP = ({ entities, session }, ownProps) => {
    return {
        user: entities.users[ownProps.match.params.userId],
        routes: entities.routeslog,
        friendships: entities.friendships,
        currentUser: entities.users[session.id]
    };
};

const mDTP = dispatch => ({
    requestUser: userId => dispatch(requestUser(userId)),
    requestRoutes: userId => dispatch(fetchRoutesLogs(userId)),
    createFriendship: friendship => dispatch(createFriendship(friendship)),
    requestFriends: userId => dispatch(requestFriends(userId)),
    deleteFriendship: friendshipId => dispatch(deleteFriendship(friendshipId))
});

export default connect(mSTP, mDTP)(UserShow);
