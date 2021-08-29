import React from 'react';
import FriendsIndexItem from './friend_index_item';
import { Link } from 'react-router-dom';

class FriendsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        const { currentUser } = this.props;
        this.props.requestFriends(currentUser.id);
        this.props.requestUserFriends(currentUser.id);
    }

    handleDelete(friendshipId) {
        this.props.deleteFriendship(friendshipId);
    }

    render() {
        let friendships;
        if (this.props.friendships) {
            friendships = Object.values(this.props.friendships);
        } else {
            friendships = [];
        }

        let comp;
        if (friendships.length === 0) {
            comp = (
                <div className='friends-content-container'>
                    <p className='no-friends-message'>You have not added any friends yet. Click the Find Friends tab above to get started.</p>
                    <Link to={"/dashboard/friends/find"}>Find Friends</Link>
                </div>
            )
        } else {
            comp = <div className='friends-content-container'>
                {
                    friendships.map((friendship, i) => (
                        <FriendsIndexItem
                            key={i}
                            friendship={friendship}
                            deleteFriendship={this.handleDelete}
                            requestUserFriends={this.props.requestUserFriends}
                            users={this.props.users}
                        />)
                    )
                }
                <Link to={"/dashboard/friends/"}>Friend list</Link>
                <Link to={"/dashboard/friends/find"}>Find Friends</Link>
            </div>
        }

        return comp
    }
}

export default FriendsIndex
