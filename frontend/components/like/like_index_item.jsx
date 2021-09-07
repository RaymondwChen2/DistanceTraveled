import React from 'react';

class LikeItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liker_id: this.props.currentUser,
            done: false,
            routeslog_id: this.props.routeId
        };

        this.handleLike = this.handleLike.bind(this);
    }
    componentDidMount() {
        this.props.requestLikes(this.props.routeId);
    }



    handleLike() {
        if (this.state.done === false) {
            this.setState({ done: true });
            this.props.createLike({
                liker_id: this.props.currentUser,
                done: true,
                routeslog_id: this.props.routeId
            });
        } else {
            this.props.unlikeRoute(this.props.like.id);
        }
    }

    render() {
        return (
            <div>
                <button className='like-button' onClick={this.handleLike}>{this.props.likes.length}</button>
            </div>
        )
    }
}

export default LikeItem;