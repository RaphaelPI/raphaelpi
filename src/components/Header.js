import React from 'react'
import { Link } from 'gatsby'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="Raphaël PI" /></Link>
                    <h1>
                        <strong><Link to="/cv">Raphaël PI</Link></strong><br />
                        31 ans <br/>
                        Dévellopeur Web, fullstack<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
