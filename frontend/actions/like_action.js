import * as LikeAPIUtil from '../utils/like_api_utils';

export const RECEIVE_ROUTE_LIKES = 'RECEIVE_ROUTE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const receiveRouteLikes = likes => ({
    type: RECEIVE_ROUTE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

const removeLike = likerId => ({
    type: REMOVE_LIKE,
    likerId
});

export const requestLikes = routeId => dispatch => {
    return LikeAPIUtil.fetchRouteLikes(routeId)
        .then(likes => dispatch(receiveRouteLikes(likes)));
};

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(like => {
            dispatch(receiveLike(like));
            return Object.values(like)[0];
        });
};

export const unlikeRoute = like => dispatch => {
    return LikeAPIUtil.unlikeRoute(like.id)
        .then(() => {
            return dispatch(removeLike(like.liker_id));
        });
};