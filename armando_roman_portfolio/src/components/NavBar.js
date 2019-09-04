import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = props => {

    const path = props

    const paths =  ["/", "/projects", "/about", "/contact"]

    let styleLanding = paths.find(possPath => possPath === path.path)

    console.log(styleLanding)

    styleLanding = styleLanding.slice( 1 );

    console.log(styleLanding)
    return (

        <div className = {`nav-bar ${styleLanding}-nav`}  >
            <ul className = 'nav-links'>
                <li className = 'nav-item' >
                    <NavLink to ='/about' style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>About</NavLink>
                </li>
                <li className = 'nav-item' >
                    <NavLink to ='/projects' style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                        color:'#ffffff'
                    }}>Projects</NavLink>
                </li>
                <li className = 'nav-item' >
                <NavLink to ='/contact' style = {{textDecoration: 'none', color: "white"}}activeStyle = {{
                    color:'#ffffff'
                }}>Contact</NavLink>
            </li>
            </ul>
        </div>
    )


}

export default NavBar