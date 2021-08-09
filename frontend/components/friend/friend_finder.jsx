import React from 'react';

class FriendFinder extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <input type="text" value='Search for Friends'  />
            </div>
        )
    }
}

export default FriendFinder