import styles from './Header.module.css'

import Title from "../title/Title"
import Subtitle from "../subtitle/Subtitle"

function Header () {
  return (
    <div className={styles.header}>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Created by Douglas Ribeiro</Subtitle>
    </div>
  )
}

export default Header