import React from "react";
import './game.css'
function Square(props) {
return (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (let i = 0; i < lines.length; ++i) {
        const [a,b,c] = lines[i];
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={()=>this.props.onClick(i)}/>;
  }

  render() {
    return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    )
  }
}

function GameHistory(prop) {
    const moveList = prop.history.map((squares, idx)=>
        <li><button onClick={()=>prop.onClick(idx)}>move</button>
        </li>
    )
    return moveList;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                isNext: false,
            }],
            curIdx: 0
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.curIdx + 1);
        const current = history[this.state.curIdx];
        const squares = current.squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        squares[i] = current.isNext ? 'X' : 'O';
        this.setState({
            history: history.concat({squares: squares, isNext: !current.isNext}),
            curIdx: history.length
        });
    }

    moveHistory(i) {
        this.setState({curIdx: i})
    }

  render() {
    const history = this.state.history;
    const current = history[this.state.curIdx];
    const squares = current.squares.slice();

    const winner = calculateWinner(squares);
    let status = winner === null ? "Next player: " + (current.isNext ? 'O' : 'X')
      : "Winner: " + winner;
    return (
        <div className="game">
          <div className="game-board">
            <Board squares = {squares} onClick = {(i)=>this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>
                <GameHistory history = {history} onClick = {(i)=>this.moveHistory(i)}></GameHistory>
            </ol>
          </div>
        </div>
    )
  }
}

export default Game;
// const root = ReactDOM.createRoot(document.getElementById("root"));