import React from 'react'
import SearchBar from './SearchBar'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.mainNav}>
        <NavLink to='/home' className={styles.navLink}>Home</NavLink>
        <NavLink to='/about'className={styles.navLink}>About</NavLink>
        <NavLink to='/favorites'className={styles.navLink}>Favorites</NavLink>
      </div>
        <SearchBar onSearch={props.onSearch}/>
    </div>
  )
}
