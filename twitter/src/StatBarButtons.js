import React from 'react';
import { Icon } from 'react-fa';

export const StatBarButton = (props) => {
  return (
    <div className="statbutton">
      <span className="does-follow">{props.text}</span>
      <br/>
      <span className="stat">{props.stat}</span>
    </div>
  );
};


export const StatBarFollow = (props) => {
  return (
    <div>
    <button className="follow">
      Follow
    </button>
    <button className="ellipses">
    <Icon name="ellipsis-v"/>
    </button>
    </div>
  );
};


export const StatBarDots = (props) => {
  return (
    <div>
    <button className="ellipses">
    <Icon name="ellipses-v"/>
    </button>
    </div>
  );
};
