import React, { Component } from 'react';
import "./Comment.css"
import Comment from "./Comment";

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
        }
    }

    hundleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        const {comments} = this.props;
        const noComments = <div>No comments</div>;
        const commentBlock =
              <div className="comments">
                  <div className="comments-header">
                      <h3>Comments</h3>
                      <button onClick={this.hundleClick}>
                          {this.state.isOpen ? 'CLOSE' : 'OPEN'}
                      </button>
                  </div>
                  {this.state.isOpen && (
                      <div className="comment-list-wrap">
                          {comments && comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
                      </div>
                  )}
              </div>;

        return (
            <>
                {comments ? (commentBlock): (noComments)}
            </>
        );
    }
}
