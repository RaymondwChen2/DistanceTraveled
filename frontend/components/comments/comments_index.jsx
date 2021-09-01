import React from "react";
import CommentItem from "./comment_index_item";


class CommentsIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            body: "",
            commenter_id: this.props.currentUser,
            routeslog_id: this.props.routeId
        };

        this.addComment = this.addComment.bind(this);
        this.handleBody = this.handleBody.bind(this);
    }

    componentDidMount(){
        this.props.requestComments(this.props.routeId);
    }

    addComment(e) {
        e.preventDefault();
        this.props.createComment({
                                body: this.state.body,
                                routeslog_id: this.state.routeslog_id, 
                                commenter_id: this.state.commenter_id
                                });
    }

    handleBody(e){
        this.setState({body: e.target.value});


    }

    render(){
        return (
            <div id="map-form">
                <span className="comments-count"> {this.props.comments.length} Comments</span>
                <textarea className="comments-textarea" cols="30" rows="2" wrap="hard" value={this.state.body} placeholder='Add a comment' onChange={this.handleBody}></textarea>
                <button className="add-comment-btn" onClick={this.addComment}>Comment</button>
                {
                    this.props.comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
                }
            </div>
        )
    }
}

export default CommentsIndex
