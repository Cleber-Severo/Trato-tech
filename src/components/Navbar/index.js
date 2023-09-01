import React from 'react'
import styles from  './Navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Navbar = () => {
  return (
        <nav className={styles.nav}>
          <Logo className={styles.logo} />
        </nav>
  )
}

export default Navbar