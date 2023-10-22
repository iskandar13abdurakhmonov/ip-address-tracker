import React from 'react'
import styles from './Info.module.css'

export default function Info({ query, location, isLoading }) {
    return isLoading ? (
        'Data is loading...'
    ) : (
        <div className={styles.infoBox}>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>ip address</small>
                <p className={styles.itemDescr}>{query}</p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>location</small>
                <p className={styles.itemDescr}>
                    {location.location?.region}, {location.location?.country}
                    {location.as?.asn}
                </p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>timezone</small>
                <p className={styles.itemDescr}>
                    UTC - {location.location?.timezone}
                </p>
            </div>
            <div className={styles.infoItem}>
                <small className={styles.itemTitle}>isp</small>
                <p className={styles.itemDescr}>{location.isp}</p>
            </div>
        </div>
    )
}
