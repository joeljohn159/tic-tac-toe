import Player from './components/Player.jsx' 
import GameBoard from './components/GameBoard.jsx'
import { useState } from 'react';
import Logs from './components/Logs.jsx'
import { WinningCombinations } from './components/WinningCombinations.js';
import GameOver from './components/GameOver.jsx';

let initialBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function deriveActivePlayer(turns){
  let whoPlayer = 'X';
  if(turns.length > 0 && turns[0].player === 'X'){
    whoPlayer = 'O';
  }
  return whoPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [presentPlayerName, setPresentPlayerName] = useState({
    'X':'Player 1',
    'O':'Player 2'
  })

  let gameBoard = [...initialBoard.map((array)=>[...array])];
   for(const turn of gameTurns){
        const {square, player} = turn;
        const {col, row} = square;
        gameBoard[row][col] = player;
   }
        
   let winner;
   for(const combination of  WinningCombinations){
    let firstSquare =  gameBoard[combination[0].row][combination[0].col];
    let secondSquare =  gameBoard[combination[1].row][combination[1].col];
    let thirdSquare =  gameBoard[combination[2].row][combination[2].col];

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare){
      winner = presentPlayerName[firstSquare];
    }

  }
  const isDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex,colIndex){

    setGameTurns((prevTurns)=>{
      deriveActivePlayer(prevTurns);
      const updatedGameTurn = [ {square: {row:rowIndex, col:colIndex},player:whoPlayer} ,...prevTurns,];
      return updatedGameTurn;
    })
  }

  function handleRematch(){
    setGameTurns([]);
  }

  function handleNameChange(name,symbol){
    setPresentPlayerName(prevName => {
      const x = {
        ...prevName,
        [symbol]:name
      }
      return x;
    })
  }
  const whoPlayer = deriveActivePlayer(gameTurns);

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player playerName='Player 1' symbol="X" isActive = {whoPlayer === 'X'} changeName={handleNameChange}/>
          <Player playerName='Player 2' symbol="O" isActive = {whoPlayer === 'O'} changeName={handleNameChange}/>
        </ol>
        {(isDraw || winner) && <GameOver winner={winner} rematch={handleRematch} />}
        <GameBoard onSelectSqaure ={handleSelectSquare} turns={gameBoard} />
        <Logs turns ={gameTurns} />
      </div>
    </main>
  )
}

export default App
