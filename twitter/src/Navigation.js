import React, { Component } from 'react';
import { NavBarButton, TwitterLogo, SearchBar, UserCircle, ComposeTweet } from './NavBarButtons';
import './App.css';
import { Icon } from 'react-fa';
import { userData } from './application-data';

class Navigation extends Component {
  render() {
    return (
      <div className="navigationsearch">
        <div className="leftnav">
          <Icon name="home"/><NavBarButton text={'Home'}/>
          <Icon name="bolt"/><NavBarButton text={'Moments'}/>
          <Icon name="bell"/><NavBarButton text={'Notifications'}/>
          <Icon name="envelope"/><NavBarButton text={'Messages'}/>
        </div>
        <div className="logo">
          <TwitterLogo userData={userData}/>
        </div>
        <div className="rightnav">
          <SearchBar/>
          <UserCircle/>
          <ComposeTweet/>
        </div>
      </div>
    );
  }
}

export default Navigation;
