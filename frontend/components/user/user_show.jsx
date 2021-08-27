import React from 'react';
import UsersShowRouteItem from './user_show_route_items';

class UserShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddFriend = this.handleAddFriend.bind(this);
    }

    componentDidMount() {
        const { userId } = this.props.match.params;
        console.log(this.props);
        this.props.requestUser(userId);
        this.props.requestRoutes(userId);
        this.props.requestFriends(this.props.currentUser.id);
    }

    handleAddFriend() {
        const { user, currentUser } = this.props;
        this.props.createFriendship({ user_id: currentUser.id, friend_id: user.id });
    }

    render() {
        const { user, routes } = this.props;
        // if (!user) {
        //     return null;
        // }

        return (
            <div className='user-show-container'>
                {Object.values(routes).map(route => <UsersShowRouteItem
                    key={route.id}
                    route={route} />)}
            </div>
        )
    }
}

export default UserShow;
