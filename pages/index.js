import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
        <>
        <div className={styles.container}>
        <main className={styles.main}>
        

        <div className={styles.grid}>
          <div  className={styles.card2}>
          <h1 className={styles.title}>
          Seja Bem vindo <br /> <code style={{color:'orange'}}>Receitas rápidas</code>
          </h1>

          <p className={styles.description} >
            Site com receitas rápidas e divertidas <br />
            Mata a fome e deixa você triste.
          </p>
          <a href="/home"><button className={styles.button}>Clique para cozinhar</button></a>


          </div>
          <Image src="/frango.png" width={296*2} height={129*2} />

        </div>
        </main>
        </div>
      
        </>
  )
}
