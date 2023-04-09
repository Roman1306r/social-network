import React from 'react'
import styles from './Theme.module.css'


const Theme = ({setDarkMode, darkMode}) => {



  return (
    <div className={styles.theme}>
       <label className={styles.switch}>
            <input onChange={() => setDarkMode(!darkMode)} className={styles.themeInput} type="checkbox" name="check"  /> 
            <span className={styles.slider + ' ' + styles.round}></span>
        </label> 
    </div>
  )
}

export default Theme