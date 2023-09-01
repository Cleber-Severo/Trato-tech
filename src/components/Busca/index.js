import React from 'react'
import styles from './Busca.module.scss'

const Busca = () => {
  return (
    <div className={styles.busca}>
        <input type="text" className={styles.input} placeholder='O que voce procura ?'/>
    </div>
  )
}

export default Busca