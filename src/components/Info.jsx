import React from 'react'
import styles from './Info.module.css'

export default function Info() {
    return (
        <div className={styles.infoBox}>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>ip address</small>
                <p className={styles.itemDescr}>192.212.174.101</p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>location</small>
                <p className={styles.itemDescr}>Brooklyn, NY 10001</p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>timezone</small>
                <p className={styles.itemDescr}>UTC - 05:00</p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>isp</small>
                <p className={styles.itemDescr}>SpaceX Starlink</p>
            </div>
        </div>
    )
}
