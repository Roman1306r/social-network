import styles from './Loader.module.css'


const Loader = () => {

 


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

export default Loader