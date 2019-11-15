import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {

    const { width } = props
    console.log(width)
    return (
        <div className = 'nav-bar'  >
        { width > 501 ? 
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
            : null
        }
        </div>
    )


}

export default NavBar