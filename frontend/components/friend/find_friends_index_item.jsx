import React from 'react';
import { Link } from 'react-router-dom';

class FindFriendIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let { user } = this.props;
        return(
            <div>
                <Link to={`/users/${user.id}`}></Link>
                <Link to={`users/${user.id}`}>{user.first_name} {user.last_name}</Link>
            </div>
        )
    }
}

export default FindFriendIndexItem