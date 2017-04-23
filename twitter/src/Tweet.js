import React, { Component } from 'react';
import './App.css';
import { Icon } from 'react-fa';
import {userData,tweets} from './application-data';

class Tweet extends Component {
  render() {
    return (
        <div>
          {this.props.tweets.map((tweet) => {
            return (
              <div className="card">
                <div className="tweet-pic">
                  <img className="iconsmall" src={this.props.userData.profileImageUrl} alt="`{this.props.userData.name}`"/>
                </div>
                <div className="tweet-container">
                  <p>
                    <span className="tweet-name">{this.props.userData.name}</span>&nbsp;
                    <span className="tweet-handle"><a href='http://twitter.com/lambdaschool'>{this.props.userData.handle}</a></span>&nbsp;
                    -&nbsp;
                    <span className="tweet-date">{tweet.date}</span>
                  </p>
                  <p className="tweet-text">{tweet.text}</p>
                  <p className="tweet-stats">
                    <span className="reply-count"><strong><Icon name="reply"/></strong>{tweet.replyCount}</span>&nbsp;
                    <span className="retweet-count"><strong><Icon name="retweet"/></strong>{tweet.retweetCount}</span>&nbsp;
                    <span className="like-count"><strong><Icon name="heart"/></strong>{tweet.likeCount}</span>&nbsp;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    );
  }
}
export default Tweet;
