import * as FriendsAPIUtil from '../utils/friend';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_USER_FRIENDS = 'RECEIVE_USER_FRIENDS';

const removeFriend = friendId => ({
    type: REMOVE_FRIENDSHIP,
    friendId
});

const receiveFriendship = friend => ({
    type: RECEIVE_FRIENDSHIP,
    friend
});

const receiveUserFriends = friends => ({
    type: RECEIVE_USER_FRIENDS,
    friends
});

export const deleteFriendship = friendId => dispatch => {
    return FriendsAPIUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)));
};

export const createFriendship = friendship => dispatch => {
    return FriendsAPIUtil.createFriend(friendship)
        .then(friend => dispatch(receiveFriendship(friend)));
};

export const requestFriends = userId => dispatch => {
    return FriendsAPIUtil.fetchUserFriends(userId)
        .then(friends => dispatch(receiveUserFriends(friends)));
};
