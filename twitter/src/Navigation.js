import React, { Component } from 'react';
import { NavBarButton, TwitterLogo, SearchBar, UserCircle, ComposeTweet } from './NavBarButtons';
import './App.css';
import { userData } from './application-data';

class Navigation extends Component {
  render() {
    return (
      <div className="navigationsearch">
        <div className="leftnav">
          <NavBarButton text={'Home'}/>
          <NavBarButton text={'Moments'}/>
          <NavBarButton text={'Notifications'}/>
          <NavBarButton text={'Messages'}/>
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
