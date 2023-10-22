import React from 'react'
import styles from './Info.module.css'

export default function Info({ query, location, isLoading }) {
    return (
        <div className={styles.info}>
            {isLoading ? (
                'Data is fetching...'
            ) : (
                <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                        <h2 className={styles.itemTitle}>ip address</h2>
                        <p className={styles.itemDescr}>{query}</p>
                    </div>
                    <div className={styles.infoItem}>
                        <h2 className={styles.itemTitle}>location</h2>
                        <p className={styles.itemDescr}>
                            {location.location?.region},{' '}
                            {location.location?.country}{' '}
                            {location.as?.asn}
                        </p>
                    </div>
                    <div className={styles.infoItem}>
                        <h2 className={styles.itemTitle}>timezone</h2>
                        <p className={styles.itemDescr}>
                            UTC {location.location?.timezone}
                        </p>
                    </div>
                    <div className={styles.infoItem}>
                        <h2 className={styles.itemTitle}>isp</h2>
                        <p className={styles.itemDescr}>{location.isp}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
