import React, { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
   }

   const handleSubmit = (e) => {
      props.onSearch(character)
      setCharacter("")
   }

   return (
      <div className={styles.sbarconteiner}>
         <input className={styles.sbarInput} type='search' onChange={handleChange} placeholder='Buscar' value={character} />
      <button className={styles.btn} onClick={handleSubmit}>Agregar</button>
      </div>
   );
}
