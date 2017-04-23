import React from 'react';
import { Icon } from 'react-fa';

export const NavBarButton = (props) => {
  return (
    <li className=''>{props.text}</li>
  );
};

export const TwitterLogo = (props) => {
  return (
    <div>
    <Icon name="twitter" aria-hidden="true"/>
    </div>
  );
};

export const SearchBar = (props) => {
  return (
    <div>
    Search
    </div>
  );
};

export const UserCircle = (props) => {
  return (
    <div className="circle">
    <Icon name="user-circle"/>
    </div>
  );
};

export const ComposeTweet = (props) => {
  return (
    <div>
    <button>
    <Icon name="pencil" aria-hidden="true"/>
    </button>
    </div>
  );
};
