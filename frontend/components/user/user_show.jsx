import React from 'react';
import UsersShowRouteItem from './user_show_route_items';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.addFriendButton = this.addFriendButton.bind(this);
    }

    componentDidMount() {
        const { userId } = this.props.match.params;
        this.props.requestUser(userId);
        this.props.requestRoutes(userId);
        this.props.requestFriends(this.props.currentUser.id);
    }

    handleAddFriend() {
        const { user, currentUser } = this.props;
        this.props.createFriendship({ user_id: currentUser.id, friend_id: user.id });
    }

    addFriendButton() {
        const { friendships, user } = this.props;
        if (this.props.currentUser.id === user.id) {
            return null;
        }

        let friendshipId;
        for (let key in friendships) {
            if (friendships[key].friend_id === user.id) {
                friendshipId = key;
            }
        }

        if (friendshipId) {
            return <span className='already-friended-btn' onClick={() => this.props.deleteFriendship(friendshipId)}>UNFOLLOW</span>
        } else {
            return <span className='add-friend-btn' onClick={this.handleAddFriend}>FOLLOW</span>
        }
    }

    render() {
        const { user, routes } = this.props
        if (!user) {
            return null;
        }

        return (
            <div className='user-show-container'>
                <Link to={"/dashboard/friends/"}>Friend list</Link>
                <Link to={"/dashboard/friends/find"}>Find Users</Link>
                <div className='user-basic-info'>
                    <span className="fas fa-running user-show-avatar"></span>
                    <div className='next-to-avatar-container'>
                        <span className='show-page-fullname'>{user.first_name} {user.last_name}</span>
                        {this.addFriendButton()}
                    </div>
                </div>
                <div>
                    <div className='routes-table-container'>
                        <table className='routes-table'>
                            <thead>
                                <tr>
                                    <th className='table-header'>Route Name</th>
                                    <th className='table-header'>Created</th>
                                    <th className='table-header'>Distance</th>
                                    <th className='table-header'>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.values(routes).map(route => <UsersShowRouteItem
                                    key={route.id}
                                    route={route} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserShow;

