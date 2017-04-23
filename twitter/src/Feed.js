import React, { Component } from 'react';
import './App.css';
import { userData, tweets } from './application-data';
import Tweet from './Tweet';
// {this.props.tweets.map((tweet) => {
//   return (
//     <Tweet userData={userData} tweets={tweets}/>
//   );
// })}
class Feed extends Component {
  render() {
    return (
      <div>
      <div className="cardheader">
          <a href="http://twitter.com/LambdaSchool/">Tweets</a>
          <a href="http://twitter.com/LambdaSchool/with_replies">Tweets & Replies</a>
          <a href="http://twitter.com/LambdaSchool/media">Media</a>
      </div>
      <div className="tweet">

          <Tweet userData={userData} tweets={tweets}/>

      </div>
      </div>
    );
  }
}

export default Feed;
