import { requestLikes, createLike, unlikeRoute } from '../../actions/like_action';
import LikeItem from './like_index_item';

const mSTP = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        likes: state.entities.likes ? Object.values(state.entities.likes) : [],
        likeId: state.entities.likes,
        users: state.entities.users
    };
};

const mDTP = dispatch => {
    return {
        requestLikes: routeId => dispatch(requestLikes(routeId)),
        createLike: like => dispatch(createLike(like)),
        unlikeRoute: likeId => dispatch(unlikeRoute(likeId))
    };
};

export default connect(mSTP, mDTP)(LikeItem);