import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import StatusBar from './StatusBar';
import Content from './Content';
import { userData, tweets } from './application-data';


class App extends Component {
  render() {
    return (
      <div className="container">

        <Navigation/>

        <Header/>

        <StatusBar/>

        <Content/>

      </div>
    );
  }
}

export default App;
