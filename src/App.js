import React, { Component } from 'react';
import './App.css';
import ArticleList from "./components/ArticleList";
import articles from "./art";
import 'react-day-picker/lib/style.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Articles
        </header>
        <div className="main">
            <div className="list">
                {articles.map(
                    (article) => (<ArticleList article={article} key={article.id}/>))
                }
            </div>
        </div>
      </div>
    );
  }
}

