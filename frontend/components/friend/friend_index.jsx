import React from 'react';
import FriendFinder from './friend_finder';

class FriendIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <FriendFinder props={this.props}/>
                friends index page
            </div>
        )
    }
}

export default FriendIndex
