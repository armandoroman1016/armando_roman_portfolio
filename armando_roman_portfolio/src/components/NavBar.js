import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/images/logo.svg'
import linked from '../assests/images/linked.svg'
import github from '../assests/images/github.svg'


const NavBar = props => {
    
    const { width } = props
    
    const logoDot = useRef(null);

    useEffect(() => {
        
        console.log(logoDot)

    })

    return (
        <div className = 'nav-bar'  >
        <img src = {logo} ref = {logoDot} alt = 'logo'/>
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
            <div className = 'social'>
                <a href = 'https://www.linkedin.com/in/armando-roman-64a53a188/'>    
                    <img src = {linked} alt = 'linked in logo'/>
                </a>
                <a href = 'https://github.com/armandoroman1016'>    
                    <img src = {github} alt = 'github logo'/>
                </a>
            </div>
        </div>
    )


}

export default NavBar