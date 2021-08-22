import React from 'react';
import UsersShowItem from './user_show_route_items';

class UserShow extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { userId } = this.props.match.params;
        this.props.requestUser(userId);
        this.props.requestRoutes(userId);
        this.props.requestFriends(this.props.currentUser.id);
    }



    render(){
        return(
            <div>
                this is the user show
            </div>
        )
    }
}

export default UserShow;
