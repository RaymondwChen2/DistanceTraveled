import React from 'react';

class LikeIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            liker_id: this.props.currentUser.id,
            done: false,
            routeslog_id: this.props.routeId,
            id: ''
        };

        this.handleLike = this.handleLike.bind(this);
    }
    componentDidMount(){
        this.props.requestLikes(this.props.routeId);
    }

    
    handleLike(){
        if (this.state.done === false) {
            this.setState({ done: true});
            this.props.createLike({
                liker_id: this.props.currentUser.id,
                done: true,
                routeslog_id: this.props.routeId
                
            }).then((like) => 
                this.setState({ id: like.id }));
        } else {
            this.props.unlikeRoute(this.state);
            this.setState(
                {
                    liker_id: this.props.currentUser.id,
                    done: false,
                    routeslog_id: this.props.routeId,
                    id: ''
                }
            );
        }
    }

    render(){
        return(
            <div>
                <button className='like-button' onClick={this.handleLike}>{this.props.likes.length}</button>
            </div>
        )
    }
}

export default LikeIndex;