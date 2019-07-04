import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={avatar} alt="Raphaël PI" /></a>
                    <h1>
                        <strong>Raphaël PI</strong><br />
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
