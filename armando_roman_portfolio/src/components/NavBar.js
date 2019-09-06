import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
    const path = props

    const paths =  ["/", "/projects", "/about", "/contact"]

    let styleLanding = paths.find(possPath => possPath === path.path)

    styleLanding = styleLanding.slice( 1 );
    return (

        <div className = {`nav-bar ${styleLanding}-nav`}  >
            <ul className = 'nav-links'>
                <li className = 'nav-item' >
                    <NavLink to = '/about' className = "nav-link" style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>About</NavLink>
                </li>
                <li className = 'nav-item' >
                    <NavLink to ='/projects' className = "nav-link"  style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>Projects</NavLink>
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