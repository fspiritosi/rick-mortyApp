import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Detail.module.css'

function Detail() {

    const {detailId} = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

  return (
    <div>
       <NavLink to='/' className={styles.btn} type='submit'>To Home</NavLink>
            <h1>{character.name}</h1>
            <h2>Gender: <span>{character.gender}</span></h2>
            <h2>Origin: <span>{character.origin?.name}</span></h2>
            <h2>Location: <span>{character.location?.name}</span></h2>
            <img src={character.image} alt='not found'/>
    </div>
  )
}

export default Detail