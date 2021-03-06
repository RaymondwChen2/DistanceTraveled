import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, updateComment } from "../../actions/comment_actions";
import { requestUser } from "../../actions/user_actions";

const CommentItem = ({ currentUser, users, comment, requestUser, deleteComment }) => {
    useEffect(() => {
        requestUser(comment.commenter_id);
    }, []);

    const commenterName = users[comment.commenter_id] ? users[comment.commenter_id].first_name : null;
    const commenterId = users[comment.commenter_id] ? users[comment.commenter_id].id : null;

    const parseDate = () => {
        let dateStr = comment.created_at.slice(0, 10);
        dateStr = dateStr.split('-');
        return `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`;
    }

    const deleteButton = currentUser.id === commenterId ? (
        <button className="delete-comment-btn" onClick={() => deleteComment(comment.id)}>Delete</button>
    ) : null

    const showCommentDropdown = e => {
        const allDropdowns = Array.from(document.querySelectorAll(".comment-dropdown"));
        allDropdowns.forEach(dropdown => {
            if (dropdown !== e.target.children[0]) {
                dropdown.classList.remove("show")
            }
        })
        if (e.target.children[0]) {
            e.target.children[0].classList.toggle("show");
        }
    }

    return (
        <div className="comment-div">
            <div className="comment-header">
                <div className="comment-header-left">
                    <Link className="comment-user-link" to={`/users/${commenterId}`}>{commenterName}</Link>
                    <span className="comment-date-span">{parseDate()}</span>
                </div>
                <span className="fas fa-ellipsis-v" onClick={showCommentDropdown}>
                    <div className="comment-dropdown">
                        {deleteButton}
                    </div>
                </span>
            </div>
            <span className="comment-body">{comment.body}</span>
        </div>
    )
}

const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    }
}

const mDTP = dispatch => ({
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    requestUser: userId => dispatch(requestUser(userId))
})

export default connect(mSTP, mDTP)(CommentItem);