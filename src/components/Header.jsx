import React from 'react'
import styles from './Header.module.css'
import '../index.css'

export default function Header({ children }) {
  return (
    <header className='header'>
        <div className="header__container">
            <div className={styles.headerBox}>
                <h1 className={styles.HeaderTitle}>IP Address Tracker</h1>
            </div>
            {children}
        </div>
    </header>
  )
}
