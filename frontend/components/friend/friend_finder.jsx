import React from 'react';
import { requestUserSearch } from '../../actions/user';

class FriendFinder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };

        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount(){
        this.props.requestFriends(this.props.currentUser.id);
        // this.props.requestRandomUsers();
    }


    onSearch(){
        requestUserSearch(this.state.search);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        };
    }


    render(){
        let { users, friends, currentUser } = this.props;
        let friendsArr = [];
        debugger;
        Object.values(friends).forEach(friend => friendsArr.push(friend.friend_id));

        let unfriendUsers = [];
        Object.values(users.forEach(user => {
            if (user.id !== currentUser.id && !friendsArr.includes(user.id)){
                if (user.first_name.toLowerCase().includes(this.state.search.toLowerCase() || user.last_name.toLowerCase().includes(this.state.search.toLowerCase()))){
                    unfriendUsers.push(user);
                }
            }
        }));
        return(
            <div>
                <div>Find Friends by First or Last name:</div>
                <div> 
                    <input type="text" value={this.state.search}  onChange={this.update('search')}/>
                    <button onClick={this.onSearch}>Search</button>
                </div>
            </div>
        )
    }
}

export default FriendFinder