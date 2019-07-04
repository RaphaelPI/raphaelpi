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
                        <div><strong><Link to="/cv">Raphaël PI</Link></strong></div>
                        <div>31 ans</div>
                        <div>Développeur Web</div>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
