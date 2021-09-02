import React from 'react';
import { Link } from 'react-router-dom';

const Tab = () => {
    return(
        <div className='friend-tab'>
            <div>
                <Link className='dashlink' to='/create_route'>Create Route</Link>
            </div>
            <div>
                <Link className='dashlink' to='/dashboard/friends'>Following</Link>
            </div>
            <div>
                <Link className='dashlink' to='/dashboard/friends/find'>Find Users</Link>
            </div>
        </div>
    )
}

export default Tab;