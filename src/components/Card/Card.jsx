import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Card.module.css'

export default function Card(props) {
   const { id } = props
   return (
      <div className={styles.bodyCard}>
         <img className={styles.imgCard} src={props.image} alt="img not found" />
         <NavLink to={`/detail/${id}`} className={styles.navLink}>
            <h2 className={styles.tittle}>{props.name}</h2>
         </NavLink>
         <div className={styles.dataCard}>
            <h2>Specie: <span>{props.species}</span></h2>
            <h2>Gender: <span>{props.gender}</span></h2>
         </div>
         <button className={styles.btn} onClick={() => props.onClose(props.id)}>Cerrar</button>
      </div>
   );
}


