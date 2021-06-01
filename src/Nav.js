import React, { useEffect, useState } from 'react'
import "./Nav.css"
import logo from './netflix-logo.png'
import avatar from './netflix-avatar.png'

function Nav() {

    const [show, handleShow] = useState(false);
    const nav = document.getElementsByClassName('nav_logo');
    
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
            nav.style.opacity = 1;
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        return () => {
            window.addEventListener("scroll", transitionNavBar);
            return () => window.removeEventListener("scroll", transitionNavBar);
        }
    }, [])


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">
                <img className="nav_logo" src={logo} alt="" />
                <img className="nav_avatar" src={avatar} alt="" />
            </div>

        </div>
    )
}

export default Nav
