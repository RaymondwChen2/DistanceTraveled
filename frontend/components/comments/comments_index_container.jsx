import { connect } from "react-redux"
import { requestComments, createComment } from "../../actions/comment_actions";
import CommentsIndex from './comments_index'

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        comments: state.entities.comments ? Object.values(state.entities.comments) : []
    };
};

const mDTP = dispatch =>({
    requestComments: routeId => dispatch(requestComments(routeId)),
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(CommentsIndex);