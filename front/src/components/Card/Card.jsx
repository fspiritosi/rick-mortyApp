import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from './Card.module.css'
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState } from "react";


export  function Card(props) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{

      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else{
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites?.forEach((fav) => {
         if(fav.id === props.id){
            setIsFav(true);
         }  
      })
   }, [props.myFavorites]);

   return (

      <div className={styles.bodyCard}>
         <div className={styles.btnContainer}>
            {isFav ? (
               <button onClick={handleFavorite}>💘 </button>
            ):(
               <button onClick={handleFavorite}>🤍</button>
            )}
         </div>
         <img className={styles.imgCard} src={props.image} alt="img not found" />
         <NavLink to={`/detail/${props.id}`} className={styles.navLink}>
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

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function(character){
         dispatch(addFavorite(character))
      },

      deleteFavorite: function(characterId){
         dispatch(deleteFavorite(characterId))
      }
   }
}

export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card) 