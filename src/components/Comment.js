import React, { Component } from 'react';
import "./Comment.css"

export default class Comment extends Component {
    render() {
        const {comment} = this.props;

        return (
            <div className="comment-list" key={comment.id}>
                <div className="comment-name">{comment.user}</div>
                <div className="comment-text">{comment.text}</div>
            </div>
        );
    }
}
