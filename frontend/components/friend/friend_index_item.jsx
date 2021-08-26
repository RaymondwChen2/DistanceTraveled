import React from 'react';
import { Link } from 'react-router-dom';

class FriendsIndexItem extends React.Component {

    render(){
        let friend = this.props.users[this.props.friend.friend_id]
        if (!friend) {
            return null;
        }

        return (
            <div>
                <Link to={`/users/${friend.id}`}></Link>
                <Link to={`/users/${friend.id}`}> {friend.first_name} {friend.last_name}</Link>
                <span onClick={ () => this.props.deleteFriendShip(this.props.friend.id)}>Unfriend</span>
            </div>
        )
    }
}

export default FriendsIndexItem;