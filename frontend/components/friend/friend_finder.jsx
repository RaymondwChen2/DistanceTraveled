import React from 'react';
import { requestUserSearch } from '../../actions/user_actions';
import FindFriendsIndexItem from './find_friends_index_item';

class FindFriends extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.requestFriends(this.props.currentUser.id);
        this.props.requestRandomUsers();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSearch() {
        requestUserSearch(this.props.requestUserSearch(this.state.query));
    }

    render() {
        const { users, friendships, currentUser } = this.props;
        const friendsIdsArr = [];
        Object.values(friendships).forEach(friendship => friendsIdsArr.push(friendship.friend_id))

        const unfriendedUsers = [];
        Object.values(users).forEach(user => {
            if (user.id !== currentUser.id && !friendsIdsArr.includes(user.id)) {
                if (user.first_name.toLowerCase().includes(this.state.query.toLowerCase()) || user.last_name.toLowerCase().includes(this.state.query.toLowerCase())) {
                    unfriendedUsers.push(user);
                }
            }
        });

        return (
            <div className='find-friends-container'>
                <span className='find-friends-span'>Find Friends by First Name or Last Name:</span>
                <div className='search-bar-container'>
                    <input type="text" className='friend-search-bar' value={this.state.query} onChange={this.update("query")} />
                    <span className='friend-search-btn' onClick={this.handleSearch}>SEARCH</span>
                </div>
                <span className='checkout-friends-span'>Or check out some of our favorite users!</span>
                <div className='more-friends-list'>
                    {
                        unfriendedUsers.map(user => <FindFriendsIndexItem key={user.id} user={user} />)
                    }
                </div>
            </div>
        )
    }
}



export default FindFriends;