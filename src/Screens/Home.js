import React from 'react'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.Home} id="Home">
        <h1 className={styles.saludo}>Hola, Soy Leonardo</h1>
        <p>Un Desarrollador Web</p>
    </div>
  )
}

export default Home