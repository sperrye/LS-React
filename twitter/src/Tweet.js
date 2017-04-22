import React, { Component } from 'react';
import './App.css';
import {userData,tweets} from './application-data';

class Tweet extends Component {
  render() {
    return (
        <div>
          {this.props.tweets.map((tweet) => {
            return (
              <div className="card">
                <img src={this.props.userData.profileImageUrl} className="iconsmall" alt="`{this.props.userData.name}`"/>
                <strong>{this.props.userData.name}</strong>
                {this.props.userData.handle}
                {tweet.text}
                {tweet.replyCount}
                {tweet.retweetCount}
                {tweet.likeCount}
                {tweet.date}
              </div>
            );
          })}
        </div>
    );
  }
}
export default Tweet;
