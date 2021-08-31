import * as CommentAPIUtil from '../utils/comment_api_utils';

export const RECEIVE_ROUTE_COMMENTS = 'RECEIVE_ROUTE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveRouteComments = comments => ({
    type: RECEIVE_ROUTE_COMMENTS,
    comments
});

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const requestComments = routeId => dispatch => {
    return CommentAPIUtil.fetchRouteComments(routeId)
        .then(comments => dispatch(receiveRouteComments(comments)))
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
};

export const updateComment = comment => dispatch => {
    return CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
};

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
};