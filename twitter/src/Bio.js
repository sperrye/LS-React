import React, { Component } from 'react';
import './App.css';


class Bio extends Component {
  render() {
    return (
        <div className="bio">
          <h1>{this.props.userData.name}</h1>
          <h3>{this.props.userData.handle} {this.props.userData.location}</h3>
          <p>{this.props.userData.bio}</p>
        </div>
    );
  }
}

export default Bio;
