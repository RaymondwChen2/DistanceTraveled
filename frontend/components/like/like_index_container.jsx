import { connect } from 'react-redux';
import { requestLikes, createLike, unlikeRoute} from '../../actions/like_action';
import LikeIndex from './like_index';

const mSTP = (state) => {

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
        unlikeRoute: like => dispatch(unlikeRoute(like))
    };
};

export default connect(mSTP, mDTP)(LikeIndex);