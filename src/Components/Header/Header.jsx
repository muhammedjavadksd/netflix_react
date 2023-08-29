import React from 'react'
import Logo from './assets/Images/netflix_logo.png'
import './assets/css/Header.css'

function Header() {
    return (
        <header>
            <div className="container_main">
                <div className="headerFlex">
                    <div className="logoHeader">
                        <img className="logo" src={Logo} alt="" />
                    </div>
                    <div className="rightButton">
                        <button>English</button>
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
