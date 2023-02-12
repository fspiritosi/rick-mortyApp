import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <img src="../assets/404-error.png" alt="" />
      <h1>Error 404</h1>
      <h2>Pagina no entoncreada</h2>
      <Link to={'/home'}>please back to home</Link>
    </div>
  )
}

export default Error

