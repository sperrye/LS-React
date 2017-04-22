import React, { Component } from 'react';
import Icon from './Icon';
import './App.css';


class Bio extends Component {
  render() {
    return (
        <div className="bio">
          {this.props.userData.name}
          <p>{this.props.userData.handle} {this.props.userData.location}</p>
          <p>{this.props.userData.bio}</p>
        </div>
    );
  }
}

export default Bio;
