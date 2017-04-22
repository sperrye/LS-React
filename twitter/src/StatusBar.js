import React, { Component } from 'react';
import './App.css';
import Follow from './Follow';

class StatusBar extends Component {
  render() {
    return (
      <div className="statsbar">
        Tweets Followers Following Likes
        <Follow/>
      </div>
    );
  }
}
export default StatusBar;
