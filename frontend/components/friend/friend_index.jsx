import React from 'react';
import FindFriendIndexItem from './find_friends_index_item';
import FriendFinder from './friend_finder';

class FriendIndex extends React.Component {
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let { currentUser } = this.props;
        this.props.requestFriends(currentUser.id);
        this.props.requestUserFriends(currentUser.id);
    }

    handleDelete(friendId){
        this.props.deleteFriendship(friendId);
    }

    render(){
        let friends;
        if (this.props.friends) {
            friends = Object.values(this.props.friends);
        } else {
            friends = [];
        }

        let comp;
        if (friends.length === 0) {
            comp = (
                <div>
                    <p>You have not added any friends yet. Click the Find Friends tab to get start </p>
                </div>
            )
        } else {
            comp = 
            <div>
                {
                    friends.map((friend, i) => (
                        <FindFriendIndexItem
                            key={i}
                            friend={friend}
                            deleteFriendship={this.handleDelete}
                            requestUserFriends={this.props.requestUserFriends}
                            users={this.props.users}
                        />
                    ))
                }
            </div>
        }
        return(comp)
    }
}

export default FriendIndex
