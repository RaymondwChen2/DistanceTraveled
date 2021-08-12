import React from 'react';

class FriendFinder extends React.Component {
    constructor(props){
        super(props);
    }

    onSearch(){
        
    }

    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder='Search for Friends'  />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default FriendFinder