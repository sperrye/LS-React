import React, { Component } from 'react';
import { Icon } from 'react-fa';
import './App.css';


class Bio extends Component {
  render() {
    return (
        <div className="bio">
          <h1 className="name">{this.props.userData.name}</h1>
          <span className="handle"><a href="http://twitter.com/lambdaschool">{this.props.userData.handle}</a></span>
          &nbsp;&nbsp;
          <span className="does-follow">Follows You</span>
          <br/>
          <br/>
          <p>{this.props.userData.bio}</p>
          <br/>
          <p>
            <Icon name="map-marker"/>&nbsp;{this.props.userData.location}<br/>
            <Icon name="link"/>&nbsp;<a href="http://lambdaschool.com">lambdaschool.com</a><br/>
            <Icon name="calendar"/>&nbsp;Joined May 2016<br/>
            <Icon name="birthday-cake"/>&nbsp;Birthday August 02<br/>
          </p>
          Message Tweet To
        </div>
    );
  }
}

export default Bio;
