import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <ul class="main-nav" >
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <a href="https://www.malt.fr/profile/raphaelpi">Raphaël PI</a>
      </li>
    </ul>
  )
}
