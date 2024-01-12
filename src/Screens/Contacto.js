import { React } from 'react';
import styles from "./Contacto.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


const Contacto = () => {

 const realizarLlamada = () =>{
  let numeroTelefono = "+59169244553";
  let url = "tel:" + numeroTelefono;
  window.location.href = url;
 }

  return (
    <div className={styles.Contacto} id="Contacto">
      <div className={styles.textContainer}>
        <h1>Vamos!!!, trabajemos juntos!!!...</h1>
        <p>¿Como tomas tu café?</p>
      </div>
      <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/leonardo-aponte-sandoval-0768a2230/" target="_blank" rel="noreferrer" className={styles.icon} >
              <BsLinkedin className={styles.IconoLit}/>
            </a>
            <a href="https://www.instagram.com/leonardo_aponte123/" rel="noreferrer" target="_blank" className={styles.icon}  >
              <FaInstagram className={styles.IconoLit}/>
            </a>
            <a href="https://github.com/Leonardoasd" target="_blank" className={styles.icon} rel="noreferrer" >
              <FaGithub className={styles.IconoLit} />
            </a>
            <div onClick={realizarLlamada} className={styles.icon} >
              <HiOutlineDevicePhoneMobile className={styles.IconoLit}/>
            </div>
        </div>
    </div>
  )
}

export default Contacto