import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

function GameOption ({ status, onClick }) {
  return (
    <div className={styles.gameOption} onClick={onClick}>
      {
        status === 1 && <Icon iconName="x" size="25px" />
      }
      {
        status === 0 && <Icon iconName="circle" size="25px" />
      }
    </div>
  )
}

export default GameOption