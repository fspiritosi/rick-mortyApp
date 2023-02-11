import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Route not found</h2>
      <Link to={'/home'}>please back to home</Link>
    </div>
  )
}

export default Error

