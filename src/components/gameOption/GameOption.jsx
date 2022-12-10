import classNames from 'classnames'

import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

function GameOption ({ status, onClick, isWinner, isDraw }) {
  return (
    <div className={classNames(styles.gameOption, {[styles.winner]: isWinner, [styles.draw]: isDraw})} onClick={onClick}>
      {
        status === -1 && <Icon iconName="x" size="25px" />
      }
      {
        status === 1 && <Icon iconName="circle" size="25px" />
      }
    </div>
  )
}

export default GameOption