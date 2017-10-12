import React, { Component } from 'react';
import paper from '../assets/paper.png'
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';
import '../App.css';

class Game extends Component {
  constructor(){
    super()
    this.state = {
      player : "",
      computer : "",
      playerWin : 0
    };
  }

  playerChoice(choice){
    this.setState(() => {
      return {
        player : choice,
        computer: ["paper", "rock", "scissors"][Math.floor(Math.random()*3)]
      }
    });

  };

  computerChoice(){
    console.log(this.state.player)
    console.log(this.state.computer);

    let computer = this.state.computer;

    if(this.state.player  ===  computer) {this.setState({playerWin: 3})}
    if (this.state.player === "rock") {
        if (computer === "scissors") {this.setState({playerWin: 1})}
        else if (computer === "paper") {this.setState({playerWin: 2})}
    }
    else if (this.state.player === "paper") {
        if (computer === "scissors") {this.setState({playerWin: 2})}
        else if (computer === "rock") {this.setState({playerWin: 1})}
    }
    else if (this.state.player === "scissors") {
        if (computer === "paper") {this.setState({playerWin: 1})}
        else if (computer === "rock") {this.setState({playerWin: 2})}
    }

  }

  render() {
    return (
      <div>
        <div className="myImages">
          <img src={paper} className={this.state.player === "paper" ? "active" : ""} onClick={()=>this.playerChoice('paper')}/>
          <img src={rock} className={this.state.player === "rock" ? "active" : ""} onClick={()=>this.playerChoice('rock')}/>
          <img src={scissors} className={this.state.player === "scissors" ? "active" : ""} onClick={()=>this.playerChoice('scissors')}/>
        </div>
        <div>
          {this.state.playerWin === 1 ? <p>You won! Computer's choice is {this.state.computer}</p> : this.state.playerWin === 2 ? <p>You loose! Computer's choice is {this.state.computer}</p> : this.state.playerWin === 3 ? <p>It's tie</p> : ''}
        </div>
        <div>
        <button className="btn btn-lg" onClick={this.computerChoice.bind(this)}>PLAY</button>
        </div>

      </div>
    );
  }

}

export default Game;
