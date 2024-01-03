import React, { useState } from 'react'
import styles from "./Proyectos.module.css"
import { IoMdClose } from "react-icons/io";
import html from "../imagenes/html-5.png";
import css from "../imagenes/css.png";
import JS from "../imagenes/JavaScript-logo.png";
import react from "../imagenes/react.png";
import { Proyects } from "./misProyectos"

const Proyectos = () => {

  const [OpenWindows, setOpenWindows] = useState(null);

  const handleWindows = (id) => {
    setOpenWindows(id !== OpenWindows ? id : id );
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setOpenWindows(false)
  }

  return (
    <div className={styles.Proyectosdiv} id="Proyectos" >
      <h1>Mis Proyectos</h1>
      <div className={styles.containerProyects}>
       {Proyects.map((x) => {
        return (
          <div key={x.id} className={OpenWindows === x.id ? styles.openWin : styles.proyecto1}  onClick={() => handleWindows(x.id)}>
            <div className={OpenWindows === x.id ? styles.BigminiNav : styles.miniNavbar}>
              <h3>{x.nombre}</h3>
              {OpenWindows === x.id && (<IoMdClose className={styles.close} onClick={handleClose} />)}
            </div>
            <div className={OpenWindows === x.id ? styles.contOpenVentana : styles.miniatura}>
              <img src={x.imagen} alt="logo de la app"  className={OpenWindows === x.id ? styles.imgOpenWin : styles.noSonEstilos} />
              {OpenWindows === x.id && (
              <div className={styles.divDescription}>
                <h3>{x.nombre}</h3>
                <p>{x.description}</p>
              </div>
              ) }
              {OpenWindows === x.id && (
                <div className={styles.divTecnologias}>
                  <img src={html} alt="logo html" className={styles.img} />
                  <img src={css} alt="logo css" className={styles.img} />
                  <img src={JS} alt="logo JS" className={styles.img} />
                  <img src={react} alt="logo react" className={styles.img} />
                </div>
              )}
              {OpenWindows === x.id && (
                <div className={styles.divBotones}>
                  <a href={x.linkWeb} target="_blank" rel="noreferrer" >Web</a>
                  <a href={x.linkRepository} target="_blank" rel="noreferrer" >Repositorio</a>
                </div>
              )}
            </div>
          </div>
        )
       })
        }
        {/* <div className={styles.proyecto1}></div>
        <div className={styles.proyecto1}></div> */}
      </div>
    </div>
  )
}

export default Proyectos