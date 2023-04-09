import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ErrorPage.module.css'

const ErrorPage = ({setIsError}) => {

  const navigate = useNavigate()
  
  const back = (event) => {
    event.preventDefault()
    setIsError(false)
    navigate('/')
  }


  return (
    <div className={styles.error}>
        <div className={styles.wrapper}>
            <h1 className={styles.oops}>404 ERROR</h1>
            <p className={styles.info}>Error 404 or Not Found is the standard HTTP response code stating that the client was able to communicate with the server, but the server cannot find the data according to the request.</p>
            <a href="#" onClick={back} className={styles.button}>Go Back</a>
        </div>
    </div>
  )
}

export default ErrorPage