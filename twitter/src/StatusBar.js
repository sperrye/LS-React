import React, { Component } from 'react';
import {StatBarButton, StatBarFollow, StatBarDots} from './StatBarButtons';
import './App.css';

class StatusBar extends Component {
  render() {
    return (
      <div className="statsbar">
      <div className="statbuttonsleft"></div>
      <div className="statbuttons">
      <StatBarButton text="Tweets" stat="114"/>
      <StatBarButton text="Followers" stat="885"/>
      <StatBarButton text="Following" stat="1,650"/>
      <StatBarButton text="Likes" stat="383"/>
      </div>
      &nbsp;
      <div className="statbuttonsright">
      <StatBarFollow/>
      <StatBarDots/>
      </div>
      </div>
    );
  }
}
export default StatusBar;
