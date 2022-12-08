import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Created by Douglas Ribeiro</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName="github" link="https://github.com/dlopeiro" />
      </div>
    </div>
  )
}

export default Header