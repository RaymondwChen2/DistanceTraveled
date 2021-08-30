import React from 'react';
import FriendsIndexItem from './friend_index_item';
import { Link } from 'react-router-dom';
import Tab from './friend_tab';

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
                    <p className='no-friends-message'>You are not following any yet. Click the Find Users above to get started.</p>
                    <Link to={"/dashboard/friends/find"}>Find Users</Link>
                </div>
            )
        } else {
            comp = <div className='friend-index-container'>  
                <Tab />
                <div className='friends-content-container'>
                    <br/>
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
                </div>
            </div>
        }

        return comp
    }
}

export default FriendsIndex
