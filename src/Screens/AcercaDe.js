import React from 'react';
import styles from "./AcercaDe.module.css";
import traje from "../imagenes/el-ajuste.jpg"

const AcercaDe = () => {
  return (
    <div className={styles.AcercaDe} id="Sobre_Mí" >
      <div className={styles.textContainer}>
        <h1>Sobre mí</h1>
        <p>Hola!!!, me llamo Leonardo Aponte Sandoval y soy un desarrollador web front end junior,
          me apasaionan los ordenadores, la programación y todo lo que tenga que ver con el mundo
          de la tecnología en general.
          Intento desarrollar mis aplicaciones web dandoles estilos más bien futuristas, usando 
          colores fríos y sobrios, intentado de alguna manera tener aplicaciones web muy futuristas
          pero que a su vez también denoten mucha elegancia.
          El diablo esta en los detalles reza el dicho, por eso en mis aplicaciones web trato de 
          pulir hasta el mas mínimo detalle.
          En conclusión soy un apasionado de la tecnología, y como programador siempre procuro 
          darle a mis aplicaciones web un estilo propio, pero intentado de alguna manera siempre
          darle ese estilo futurista y elegante que me caracteriza, cuidando siempre muy bien 
          hasta el mas minimo de los detalles.
        </p>
      </div>
      <div>
          <img src={traje} alt="foto mia" />
        </div>
    </div>
  )
}

export default AcercaDe