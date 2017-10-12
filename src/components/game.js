import React, { Component } from 'react';
import paper from '../assets/paper.png'
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';
import '../App.css';

class Game extends Component {
  playerChoice(){

  }

  computersChoice(){

  }

  render() {
    return (
      <div>
        <div className="myImages">
          <img src={paper}/>
          <img src={rock}/>
          <img src={scissors}/>
        </div>
        <div>
        <button className="btn btn-primary">PLAY</button>
        </div>
      </div>
    );
  }

}

export default Game;
