import React, { Component } from 'react';
import './App.css';
import {userData,tweets} from './application-data';

// {tweets.map((tweet) => {
//   return
//     <Tweet userData={userData} tweets={tweets}/>
// })}


class Tweet extends Component {
  render() {
    return (
        <div className="card">
          {this.props.userData.profileImageUrl}
          {this.props.userData.name}
          {this.props.userData.handle}
          {this.props.tweets.date}
          {this.props.tweets.text}
          {this.props.tweets.replyCount}
          {this.props.tweets.retweetCount}
          {this.props.tweets.likeCount}
        </div>
    );
  }
}
export default Tweet;
