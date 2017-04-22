import React, { Component } from 'react';
import './App.css';


class Bio extends Component {
  render() {
    return (
        <div className="bio">
          <h1 className="name">{this.props.userData.name}</h1>
          <span className="handle">{this.props.userData.handle}</span>
          &nbsp;&nbsp;
          <span className="does-follow">Follows You</span>
          <p>{this.props.userData.bio}</p>
          <p>
            <ul>
              <li>{this.props.userData.location}</li>
              <li><a href="http://lambdaschool.com">lambdaschool.com</a></li>
              <li>Joined May 2016</li>
              <li>Birthday August 02</li>
            </ul>
          </p>
          Message Tweet To
        </div>
    );
  }
}

export default Bio;
