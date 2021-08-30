import React from 'react';
import { Link } from 'react-router-dom';

const Tab = () => {
    return(
        <div className='friend-tab'>
            <div>
                <Link to='/dashboard/friends'>FOLLOWING</Link>
            </div>
            <div>
                <Link to='/dashboard/friends/find'>FIND USERS</Link>
            </div>
        </div>
    )
}

export default Tab;