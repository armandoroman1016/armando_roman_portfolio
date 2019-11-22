import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/images/logo.svg'

const NavBar = props => {

    console.log(logo)

    const { width } = props
    
    return (
        <div className = 'nav-bar'  >
        <img src = {logo} />
        <ul className = 'nav-links'>
                <li className = 'nav-item' >
                    <NavLink to = '/' className = "nav-link" style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>Home</NavLink>
                </li>
                <li className = 'nav-item' >
                    <NavLink to ='/projects' className = "nav-link"  style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>Projects</NavLink>
                </li>
                <li className = 'nav-item' >
                    <NavLink to ='/about' className = "nav-link"  style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>About</NavLink>
                </li>
                <li className = 'nav-item' >
                <NavLink to ='/contact' className = "nav-link" style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                    color:'#ffffff'
                }}>Contact</NavLink>
            </li>
            </ul>
        </div>
    )


}

export default NavBar