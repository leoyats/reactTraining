import React, { Component } from 'react';
import "./ArticleList.css"
import Comments from "./Comments";

class ArticleList extends Component {
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

    list = (article ) => {
        return (
            <div key={article.id} className="ArticleListItem">
                <div className="ArticleListItemTitle">
                    <div>{article.title}</div>
                    <button onClick={this.hundleClick}>
                        {this.state.isOpen ? 'CLOSE' : 'OPEN'}
                    </button>
                </div>
                {this.state.isOpen && (
                    <div>
                        <div className="ArticleListItemText">{article.text}</div>
                        <div className="ArticleListItemDate">
                            {new Date(article.date).toUTCString().split(' GMT')}
                        </div>
                        <Comments comments={article.comments} key={article.id}/>
                    </div>
                )}
            </div> )
    };

    render() {
        const {article} = this.props;

        return (
            <div className="ArticleListWrapper">
                {this.list(article)}
            </div>
        );
    }
}

export default ArticleList;
