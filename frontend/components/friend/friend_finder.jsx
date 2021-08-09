import React from 'react';

class FriendFinder extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" value='Search for Friends'  />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default FriendFinder