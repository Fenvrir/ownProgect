import React from 'react'
import styles from './Body.module.scss';
function Body() {
    return (
        <div className={styles.mainBlock + ' Main'}>
            <h1>Main page of my SPA</h1>
        </div>
    )
}

export default Body