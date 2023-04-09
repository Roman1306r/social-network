import React from 'react'
import styles from './Button.module.css'


const Button = ({children, fn, disabled = false}) => {
  return (
    <button onClick={fn || null} disabled={disabled} className={styles.button}>{children}</button>
  )
}

export default Button