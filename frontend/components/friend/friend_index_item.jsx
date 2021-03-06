import React from 'react';
import { Link } from 'react-router-dom';

class FriendsIndexItem extends React.Component {

    render() {
        const friend = this.props.users[this.props.friendship.friend_id]
        if (!friend) {
            return null;
        }

        return (
            <div className='friend-index-item'>
                <Link to={`/users/${friend.id}`}></Link>
                <div className='friend-content'>
                    <div className='full-name-container'>
                        <Link className="full-name-link" to={`/users/${friend.id}`}>{friend.first_name} {friend.last_name}</Link>
                        <span className='remove-friend-btn' onClick={() => this.props.deleteFriendship(this.props.friendship.id)}>Unfollow</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendsIndexItem;
