import React, { Component } from 'react';
import './App.css';
import {userData} from './application-data';

class Icon extends Component {
  render() {
    return (
      <div>
      <img className="icon" src={this.props.userData.profileImageUrl} alt=""/>
      </div>
    );
  }
}

export default Icon;
