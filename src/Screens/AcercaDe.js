import React from 'react';
import styles from "./AcercaDe.module.css";
import traje from "../imagenes/mia-foto.jpg";
import curriculum from "./archivo.pdf"

const AcercaDe = () => {
  return (
    <div className={styles.AcercaDe} id="Sobre_Mí" >
      <div className={styles.textContainer}>
        <h1>Sobre mí</h1>
        <img className={styles.contImg} src={traje} alt="foto mia" />
        <div>
        <p>Hola, me llamo Leonardo Aponte Sandoval y soy un desarrollador web front-end junior. Me 
          apasionan las computadoras, la programación y todo lo que tenga que ver con el mundo de la 
          tecnología en general.</p>
        <p>Intento desarrollar mis aplicaciones web dándoles estilos más bien futuristas, usando 
          colores fríos y sobrios, intentando de alguna manera tener aplicaciones web muy futuristas
           pero que a su vez también denoten mucha elegancia.</p>
        <p>"El diablo está en los detalles", reza el dicho. Por eso, en mis aplicaciones web 
          trato de pulir hasta el más mínimo detalle.</p>
        <p>En conclusión, soy un apasionado de la tecnología y, como programador, siempre procuro darle
           a mis aplicaciones web un estilo propio. Intento de alguna manera siempre darles ese estilo 
           futurista y elegante que me caracteriza, cuidando siempre muy bien hasta el más mínimo de los
            detalles.</p>
          </div>
          <a className={styles.botonDescarga} href={curriculum} download="Mi-currículum">Descargar CV</a>
      </div>
      
    </div>
  )
}

export default AcercaDe