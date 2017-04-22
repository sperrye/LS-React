import React, { Component } from 'react';
import './App.css';
import { userData, tweets } from './application-data';
import Tweet from './Tweet';

class Feed extends Component {
  render() {
    return (
      <div>
      <div className="cardheader">
        Tweets Tweets & Replies Media
      </div>
        <Tweet userData={userData} tweets={tweets}/>
      </div>
    );
  }
}

export default Feed;
