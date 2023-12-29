import React, { useState } from 'react'
import styles from "./Proyectos.module.css"
import Aleatoriedad from "../imagenes/SistemaDeAleatoriedad.png";
import { IoMdClose } from "react-icons/io";
import html from "../imagenes/html-5.png";
import css from "../imagenes/css.png";
import JS from "../imagenes/JavaScript-logo.png";
import react from "../imagenes/react.png";

const Proyectos = () => {

  const [Ventana, setVentana] = useState(false);

  const handleVentana = () => {
    setVentana(true) 
  }
  const handleClose = (e) => {
    e.stopPropagation();
    setVentana(false)
  }
  const redirectToURL = () => {
    window.open('https://github.com/Leonardoasd/Sistema_de_Aleatoriedad.git', "_blank");
  };

  const redirectToURL2 = () => {
    window.open("https://leonardoasd.github.io/sistema-de-aleatoriedad/")
  }

  return (
    <div className={styles.Proyectosdiv} id="Proyectos" >
      <h1>Mis Proyectos</h1>
      <div className={styles.containerProyects}>
        <div className={Ventana === false ? styles.proyecto1 : styles.openVentana} onClick={handleVentana}>
          <div className={styles.miniNav}>
            <p>Sistema De Aleatoriedad</p>
            {Ventana === true && (<IoMdClose className={styles.close} onClick={handleClose} />)}
          </div>
          <div className={styles.contenido}>
            <div className={Ventana ? styles.divImgOpen : styles.DivImg}>
              <img src={Aleatoriedad} alt="Sistema de Aleatoriedad" className={Ventana ? styles.imgPrincipal : styles.img1} />
            </div>
           {Ventana === true && (<div className={styles.descripcion}>
            <h2>Sistema de Aleatoriedad</h2>
            <p>Esta web es un sistema de JavaScript que permite registrar palabras para luego devolver una de esas palabras de manera aleatoria, similar a una lotería.</p>
           </div>)}
           {Ventana === true &&
           (<div className={styles.logos}>
              <img src={html} alt="logo html" className={styles.img} />
              <img src={css} alt="logo css" className={styles.img} />
              <img src={JS} alt="logo JS" className={styles.img} />
              <img src={react} alt="logo react" className={styles.img} />
            </div>)}
            {Ventana === true && (
              <div className={styles.contButtons}>
                <button onClick={redirectToURL2} >Web</button>
                <button onClick={redirectToURL} >Repositorio</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.proyecto1}></div>
        <div className={styles.proyecto1}></div>
        {/* <div className={styles.proyecto4}></div>
        <div className={styles.proyecto5}></div>
        <div className={styles.proyecto6}></div> */}
      </div>
    </div>
  )
}

export default Proyectos