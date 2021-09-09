import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Menu() {
    return(
        <div className={styles.container}>
          <div className={styles.grid}>
            <a href="/home" className={styles.card}>
              <h2>Venhar cozinhar conosco &rarr;</h2>
            </a>
          </div>
       </div>
    )
}
