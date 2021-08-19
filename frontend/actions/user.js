import * as userAPIUtil from '../utils/user';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USER';
export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
});


export const requestUser = userId => dispatch => {
    return userAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)));
};

export const requestUserSearch = search => dispatch => {
    return userAPIUtil.fetchUserSearch(search)
        .then(users => dispatch(receiveUsers(users)));
};

export const requestUserFriends = userId => dispatch => {
    return userAPIUtil.fetchUser(userId)
        .then(friends => dispatch(receiveFriends(friends)));
};

export const requestRandomUsers = () => dispatch => {
    return userAPIUtil.fetchRandomUsers()
        .then(users => dispatch(receiveUsers(users)));
};