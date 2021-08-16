import React from 'react';
import { requestUserSearch } from '../../actions/user';

class FriendFinder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        };

        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(){
        debugger
        requestUserSearch(this.state.search);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder='Search for Friends' value={this.state.search} onChange={this.update('search')}/>
                    <button onClick={this.onSearch}>Search</button>
                </form>
            </div>
        )
    }
}

export default FriendFinder