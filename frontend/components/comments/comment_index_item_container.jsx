import { CommentItem } from "./comment_index_item";

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    }
}

const mDTP = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    requestUser: userId => dispatch(requestUser(userId))
});

export default connect(mSTP, mDTP)(CommentItem);