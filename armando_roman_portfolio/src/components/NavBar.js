import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/images/logo.svg'
import linked from '../assests/images/linked.svg'
import github from '../assests/images/github.svg'

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
            <div className = 'social'>
                <a href = 'https://www.linkedin.com/in/armando-roman-64a53a188/'>    
                    <img src = {linked}/>
                </a>
                <a href = 'https://github.com/armandoroman1016'>    
                    <img src = {github}/>
                </a>
            </div>
        </div>
    )


}

export default NavBar