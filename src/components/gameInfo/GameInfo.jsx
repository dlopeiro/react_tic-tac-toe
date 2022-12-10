import styles from "./GameInfo.module.css"
import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo ({ currentPlayer, winner, onReset }) {

  const shouldEnableButton = () => {
    if (winner !== 0) return true
  }
  return (
    <div className={styles.nextPlayerContent}>
      {
        winner === 0 &&
        <>
          <h4>Next player:</h4>
          {
            currentPlayer === 1 && <Icon iconName="circle" />
          }
          {
            currentPlayer === -1 && <Icon iconName="x" />
          }
        </>
      }
      {
        winner !== 0 &&
        <>
        <h4>We have a winner!</h4>
          {
            winner === 1 && <Icon iconName="circle" />
          }
          {
            winner === -1 && <Icon iconName="x" />
          }
        </>
      }
      <Button onClick={onReset} disabled={!shouldEnableButton()}>
        Play again
      </Button>
    </div>
  )
}

export default GameInfo