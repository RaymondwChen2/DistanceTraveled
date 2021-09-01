import { RECEIVE_LIKE, RECEIVE_ROUTE_LIKES, REMOVE_LIKE } from "../actions/like_action";

const likeReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ROUTE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            let likerKey = Object.values(action.like)[0];
            let likerId = Object.values(action.like)[0].liker_id;
            nextState[likerId] = likerKey;
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likerId];
            return nextState;
        default: 
            return state;
    }
};

export default likeReducer;