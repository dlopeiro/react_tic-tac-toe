import { useState, useEffect } from "react"
import styles from "./Game.module.css"

import GameOption from "../gameOption/GameOption"
import GameInfo from "../gameInfo/GameInfo"

const winnerTable = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function Game () {
  // below we have four useState functions: gameState, currentPlayer, winner and winnerLine
  const [gameState, setGameState] = useState(Array(9).fill(0)) // updates the value in the game table
  const [currentPlayer, setCurrentPlayer] = useState(-1) // updates who's the next player
  const [winner, setWinner] = useState(0) // updates winner
  const [winnerLine, setWinnerLine] = useState([]) // updates winner line path

  const handleClick = (pos) => { // when a space in the game table is clicked triggers changes
    if (gameState[pos] === 0 && winner === 0) { // if space is empty and no one has won yet
      let newGameState = [...gameState] 
      newGameState[pos] = currentPlayer // updates the value of the space being clicked on with currentPlayer value
      setGameState(newGameState) // updates gameState
    }
  }

  const verifyGame = () => {
    winnerTable.forEach((line) => {
      const values = line.map((value) => gameState[value])
      const sum = values.reduce((sum, current) => sum + current)
      if (sum === 3 || sum === -3) {
        setWinner(sum / 3);
        setWinnerLine(line)
        console.log("winner: ", sum /3)
      }
    })
  }

  const handleReset = () => {
    setGameState(Array(9).fill(0))
    setWinner(0)
    setCurrentPlayer(-1)
    setWinnerLine([])
  }

  const verifyWinnerLine = (position) => winnerLine.find((value) => value === position) !== undefined

  useEffect(() => { // this keeps watching the gameState parameter from the useState function
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
  }, [gameState])

  return (
    <div className={styles.gameContent}>
      <div className={styles.game}>
        { // use curly brackets so the code know the following is javaScript lines
          gameState.map((value, position) =>
            <GameOption
              key={`game-option-pos-${position}`}
              status={value}
              onClick={() => handleClick(position)}
              isWinner={verifyWinnerLine(position)}
            />
          )
        }
      </div>
      <GameInfo currentPlayer={currentPlayer} winner={winner} onReset={handleReset} />
    </div>
  )
}

export default Game