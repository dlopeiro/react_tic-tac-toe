import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score () {
  return (
    <>
      <h4>Score</h4>
      <div className={styles.score}>
        <div className={styles.scoreContent}>
          <Icon iconName="circle" size="15px" />
          <p>0</p>
        </div>
        <div className={styles.scoreContent}>
          <Icon iconName="x" size="15px" />
          <p>0</p>
        </div>
      </div>
    </>
  )
}

export default Score