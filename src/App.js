import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookmarkList from './components/bookmark_list';

const bookmarks = [
  {url: 'http://google.com', title: 'Google', description: 'search engine'},
  {url: 'http://yandex.ru', title: 'Yandex', description: 'another search engine'}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Zakladki</h2>
        </div>
        <p className="App-intro">
          Just another web app to handle bookmarks.
        </p>
        <BookmarkList bookmarks={bookmarks} />
      </div>
    );
  }
}

export default App;
