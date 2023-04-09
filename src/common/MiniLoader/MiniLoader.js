import React from 'react'
import styles from './MiniLoader.module.css'


const MiniLoader = () => {
  return (
    <div className={styles.loader}>
        <div className={styles.box}>
            <div className={styles.boxContainer}>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
            </div>
        </div>
    </div>
  )
}

export default MiniLoader