import React from 'react';
import { Link } from 'react-router-dom';

class FindFriendsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user } = this.props;
        return (
            <div>
                <Link to={`/users/${user.id}`}></Link>
                <div>
                    <div>
                        <Link className="full-name-link" to={`/users/${user.id}`}>{user.first_name} {user.last_name}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default FindFriendsIndexItem;
