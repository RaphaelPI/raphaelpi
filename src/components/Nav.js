import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <ul class="main-nav" >
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/cv">Cv</Link>
      </li>
    </ul>
  )
}
