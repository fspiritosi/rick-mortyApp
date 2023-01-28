import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.me}>
      <div className={styles.ab}>
        <p>Hello! My nave is Fabricio Spiritosi. I'm studing in Henry to Full stack Developer <br />
        This is a proyect integration and is an aplication to Rick & Morty, and consume Rick & Morty API<br />
        This was made using CSS, HTML, JS and Ract <br />
        </p>
        <Link to={'/home'}>
          <h3 className={styles.lik}> I hope you enjoy it!</h3>
        </Link>
      </div>
    </div>
  )
}

export default About