import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll";
import styles from "./NavBar.module.css"
import {AiOutlineMenu} from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai";
import logotipo from "../imagenes/logo3.jpg"
const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [scroll, setScroll] = useState(false);

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 900 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension)
    }
  },[windowDimension]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function reemplazarGuionesBajos(cadena) {
    return cadena.replace(/_/g, ' ');
  }
  const links = [
    {
      id: 1,
      link: "Proyectos"
    },
    {
      id: 2,
      link: "Tecnologías"
    },
    {
      id: 3,
      link: "Sobre_Mí"
    },
    {
      id: 4,
      link: "Contacto"
    }
  ]
  
  return (
    <div className={navBarOpen === false ? (scroll ? styles.navBarScroll : styles.navBar) : styles.navOpen}>
      {!navBarOpen && <Link className={styles.contLogo} to="Home" smooth duration={500} ><img src={logotipo} alt="logotipo" className={styles.logo}/><h2>| Portafolios de Leonardo</h2></Link> }

      {!navBarOpen && (windowDimension.width < 900 || windowDimension.height > 1300) ? (
      <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} className={styles.menuNav} size={25} />
      )
       : ((windowDimension.width < 900 || windowDimension.height > 1300) && (<AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} className={styles.closeNav} size={40} />))
       }
      {navBarOpen &&
        <ul className={styles.navOpenContainer}>
        {links.map((x) => (
          <div >
            <Link onClick={() => setNavBarOpen(!navBarOpen)}
            to={x.link} 
            smooth 
            duration={500} 
            key={x.id}
            className={styles.navLink}>
              {reemplazarGuionesBajos(x.link)}
            </Link>
            <div className={styles.border}></div>
          </div>
        ))}
        </ul>
      }
      {
        (windowDimension.width > 900 && windowDimension.height < 1790) && 
        (<ul className={styles.linksContainer}>
          {links.map((x) => (
            <div>
              <Link
              to={x.link} 
              smooth 
              duration={500} 
              key={x.id}
              className={styles.navLink}>
                {reemplazarGuionesBajos(x.link)}
              </Link>
              <div className={windowDimension.width < 900 && styles.border}></div>
            </div>
          ))}
          </ul>)
      }
    </div>
  )
}

export default NavBar