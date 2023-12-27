import { React, useState } from 'react'
import styles from "./Tecnologias.module.css"
import html from "../imagenes/html-5.png";
import css from "../imagenes/css.png";
import JS from "../imagenes/JavaScript-logo.png";
import react from "../imagenes/react.png";
import redux from "../imagenes/redux.png";
import Bootstrap from "../imagenes/bootstrap.png";
import d3 from "../imagenes/d3.png";

const Tecnologias = () => {

const [LevelTechnology, setLevelTechnology] = useState(null);

  const misTecnologias = [{
    id: 0,
    name: styles.logoHtml,
    url: html,
    atl: "logo de html",
    level: styles.lvlHtml,
    porcentaje: "80%"
  },
  {
    id: 1,
    name: styles.logosCss,
    url: css,
    atl: "logo de css",
    level: styles.lvlCss,
    porcentaje: "80%"
  },
  {
    id: 2,
    name: styles.logoJS,
    url: JS,
    atl: "logo de JavaScript",
    level: styles.lvlJS,
    porcentaje: "70%"
  },
  {
    id: 3,
    name: styles.logoReact,
    url: react,
    alt: "logo de react",
    level: styles.lvlReact,
    porcentaje: "60%"
  },
  {
    id: 4,
    name: styles.logoRedux,
    url: redux,
    alt: "logo de Redux",
    level: styles.lvlRedux,
    porcentaje: "40%"
  },
  {
    id: 5,
    name: styles.logoBootstrap,
    url: Bootstrap,
    alt: "logo de Bootstrap",
    level: styles.lvlBootstrap,
    porcentaje: "40%"
  },
  {
    id: 6,
    name: styles.logoD3,
    url: d3,
    alt: "logo de D3",
    level: styles.lvlD3,
    porcentaje: "40%"

  }]

const handleLevel = (id) => {
  setLevelTechnology(id === LevelTechnology ? null : id);
};

  return (
    <div className={styles.Tecnologias} id="Tecnologías" >
      <h1>Tecnologias</h1>
      <div className={styles.Container}>
        {misTecnologias.map((x) => {
          return (<div key={x.id} onClick={() => handleLevel(x.id)} className={LevelTechnology === x.id ? x.level : styles.divDelLogo}>
                    {LevelTechnology !== x.id && (<img src={x.url} className={x.name} alt={x.alt} />) }
                    {LevelTechnology === x.id && (<p>{x.porcentaje}</p>)}
                  </div>)
        })}

      </div>
    </div>
  )
}

export default Tecnologias