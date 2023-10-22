import React from 'react'
import styles from './Form.module.css'

export default function Form() {
  return (
    <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='Search for any IP address or domain' />
        <button className={styles.button}></button>
    </form>
  )
}
