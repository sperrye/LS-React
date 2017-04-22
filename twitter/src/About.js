import React, { Component } from 'react';
import './App.css';
import Bio from './Bio';
import Icon from './Icon';
import {userData} from './application-data';

class About extends Component {
  render() {
    return (
      <div className="about">
        <Icon userData={userData} />
        <Bio userData={userData} />
      </div>
    );
  }
}

export default About;
