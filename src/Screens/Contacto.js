import { React , useState } from 'react';
import styles from "./Contacto.module.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


const Contacto = () => {

  const [Phone, setPhone] = useState(false);

  const handlePhone = () => {
    setPhone(!Phone)
  }

  return (
    <div className={styles.Contacto} id="Contacto">
      <div className={styles.textContainer}>
        <h1>Vamos!!!, trabajemos juntos!!!...</h1>
        <p>¿Como tomas tu café?</p>
      </div>
      <div className={styles.iconContainer}>
            <a href="https://www.linkedin.com/in/leonardo-aponte-sandoval-0768a2230/" target="_blank" rel="noreferrer" className={styles.icon} >
              <BsLinkedin /> Linkedin
            </a>
            <a href="https://www.instagram.com/leonardo_aponte123/" rel="noreferrer" target="_blank" className={styles.icon}  >
              <FaInstagram /> Instagram
            </a>
            <a href="https://github.com/Leonardoasd" target="_blank" className={styles.icon} rel="noreferrer" >
              <FaGithub  /> Github
            </a>
            <div onClick={handlePhone} className={Phone === false ? styles.icon : styles.celNumber} >
              <HiOutlineDevicePhoneMobile /> Llámame<p className={Phone === false ? styles.mostrar : styles.noMostrar} >+591 69244553</p>
            </div>
        </div>
    </div>
  )
}

export default Contacto