import React from 'react'
import styles from './Info.module.css'
import Loader from './Loader'

export default function Info({ location, isLoading }) {
    return (
        <div className={styles.box}>
            {isLoading ? (
                <Loader/>
            ) : (
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <div className={styles.infoContent}>
                            <h2 className={styles.infoTitle}>ip address</h2>
                            <p className={styles.infoDescr}>{location?.ip}</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoContent}>
                            <h2 className={styles.infoTitle}>location</h2>
                            <p className={styles.infoDescr}>
                                {location.location?.city},{' '}
                                {location.location?.country} {location.as?.asn}
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoContent}>
                            <h2 className={styles.infoTitle}>timezone</h2>
                            <p className={styles.infoDescr}>
                                UTC {location.location?.timezone}
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoContent}>
                            <h2 className={styles.infoTitle}>isp</h2>
                            <p className={styles.infoDescr}>{location?.isp}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
