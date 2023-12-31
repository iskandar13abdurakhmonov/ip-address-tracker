import React from 'react'
import styles from './Header.module.css'
import '../index.css'

export default function Header({ children }) {
    return (
        <header className="header">
            <div className="header__container header-flex">
                <div className={styles.header}>
                    <div className={styles.headerBox}>
                        <h1 className={styles.headerTitle}>
                            IP Address Tracker
                        </h1>
                    </div>
                </div>
                {children}
            </div>
        </header>
    )
}
