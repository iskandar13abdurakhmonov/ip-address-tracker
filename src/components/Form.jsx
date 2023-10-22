import React from 'react'
import styles from './Form.module.css'

export default function Form({ query, setQuery, querySubmit }) {
    return (
        <form className={styles.form} onSubmit={(e) => {querySubmit(query); e.preventDefault()}}>
            <input
                className={styles.input}
                type="text"
                value={query}
                placeholder="Search for any IP address or domain"
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.button}></button>
        </form>
    )
}
