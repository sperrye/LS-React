import React from 'react';

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
    Follow
    </div>
  );
};


export const StatBarDots = (props) => {
  return (
    <div>
    ...
    </div>
  );
};
