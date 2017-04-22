import React, { Component } from 'react';
import './App.css';
import About from './About';
import Feed from './Feed';
import WhoToFollow from './WhoToFollow';
import Trending from './Trending';

class Content extends Component {
  render() {
    return (
        <div className="content">
          <div className="leftbar">
            <About/>
          </div>

        <div className="feed">
          <Feed/>
        </div>

        <div className="rightbar">
          <WhoToFollow/>
          <Trending/>
        </div>
      </div>
    );
  }
}
export default Content;
