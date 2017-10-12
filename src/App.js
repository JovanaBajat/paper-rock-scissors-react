import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game'
import Header from './components/header';
import 'spectre.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
